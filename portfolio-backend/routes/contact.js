// routes/contact.js - Contact routes
const express = require("express");
const router = express.Router();

// Import controllers
const {
  sendMessage,
  getMessages,
  getMessageById,
  markAsRead,
  replyToMessage,
  deleteMessage,
  getMessageStats,
} = require("../controllers/contactController");

// Import middleware
const { authenticate, authorize } = require("../middleware/auth");
const {
  validateContact,
  validateObjectId,
  validatePagination,
  sanitizeInput,
} = require("../middleware/validation");

// Rate limiting for contact form
const rateLimit = require("express-rate-limit");
const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // 3 submissions per IP per window
  message: {
    success: false,
    message: "Too many contact form submissions. Please try again later.",
    code: "RATE_LIMIT_EXCEEDED",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// POST /api/contact/send - Send contact message (public with rate limiting)
router.post("/send", [
  contactRateLimit,
  sanitizeInput,
  validateContact,
  sendMessage,
]);

// GET /api/contact/messages - Get all messages (admin only)
router.get("/messages", [
  authenticate,
  authorize("admin"),
  validatePagination,
  getMessages,
]);

// GET /api/contact/messages/stats - Get message stats (admin only)
router.get("/messages/stats", [
  authenticate,
  authorize("admin"),
  getMessageStats,
]);

// GET /api/contact/messages/:id - Get single message (admin only)
router.get("/messages/:id", [
  validateObjectId,
  authenticate,
  authorize("admin"),
  getMessageById,
]);

// PATCH /api/contact/messages/:id/read - Mark as read (admin only)
router.patch("/messages/:id/read", [
  validateObjectId,
  authenticate,
  authorize("admin"),
  markAsRead,
]);

// POST /api/contact/messages/:id/reply - Reply to message (admin only)
router.post("/messages/:id/reply", [
  validateObjectId,
  authenticate,
  authorize("admin"),
  sanitizeInput,
  (req, res, next) => {
    const { replyMessage } = req.body;

    if (!replyMessage || replyMessage.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Reply message is required",
      });
    }

    if (replyMessage.length > 2000) {
      return res.status(400).json({
        success: false,
        message: "Reply message cannot exceed 2000 characters",
      });
    }

    next();
  },
  replyToMessage,
]);

// DELETE /api/contact/messages/:id - Delete message (admin only)
router.delete("/messages/:id", [
  validateObjectId,
  authenticate,
  authorize("admin"),
  deleteMessage,
]);

// PATCH /api/contact/messages/:id/status - Update message status (admin only)
router.patch("/messages/:id/status", [
  validateObjectId,
  authenticate,
  authorize("admin"),
  (req, res, next) => {
    const { status } = req.body;
    const validStatuses = ["New", "Read", "Replied", "Archived"];

    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
      });
    }

    next();
  },
  async (req, res, next) => {
    try {
      const Contact = require("../models/Contact");
      const message = await Contact.findById(req.params.id);

      if (!message) {
        return res.status(404).json({
          success: false,
          message: "Message not found",
        });
      }

      message.status = req.body.status;

      if (req.body.status === "Replied" && !message.repliedAt) {
        message.repliedAt = new Date();
      }

      await message.save();

      res.json({
        success: true,
        message: "Message status updated successfully",
        data: { message: message.getPublicData() },
      });
    } catch (error) {
      next(error);
    }
  },
]);

module.exports = router;
