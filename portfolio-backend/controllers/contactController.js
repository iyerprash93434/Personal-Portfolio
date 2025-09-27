// controllers/contactController.js - Contact controller
const { validationResult } = require("express-validator");
const Contact = require("../models/Contact");

// @desc    Send contact form message
// @route   POST /api/contact/send
// @access  Public
const sendMessage = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    // Get client information
    const userAgent = req.get("User-Agent") || "";
    const ipAddress = req.ip || req.connection.remoteAddress || "";
    const referrer = req.get("Referer") || "";

    // Create contact message
    const contactData = {
      ...req.body,
      userAgent,
      ipAddress,
      referrer,
    };

    const contact = new Contact(contactData);
    await contact.save();

    // TODO: Send email notification to admin
    // You can add email service later

    res.json({
      success: true,
      message: "Message sent successfully. Thank you for reaching out!",
      data: {
        messageId: contact._id,
        status: contact.status,
      },
    });
  } catch (error) {
    console.error("Send message error:", error);
    res.status(500).json({
      success: false,
      message: "Server error sending message. Please try again later.",
    });
  }
};

// @desc    Get all contact messages (admin only)
// @route   GET /api/contact/messages
// @access  Private (admin)
const getMessages = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const sort = req.query.sort || "-createdAt";
    const { status, category, priority, search } = req.query;

    // Build query object
    let query = {};

    if (status && status !== "all") {
      query.status = status;
    }

    if (category && category !== "all") {
      query.category = category;
    }

    if (priority && priority !== "all") {
      query.priority = priority;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { subject: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
      ];
    }

    // Don't show spam messages by default
    if (req.query.includeSpam !== "true") {
      query.isSpam = false;
    }

    const messages = await Contact.find(query)
      .sort(sort)
      .limit(limit)
      .skip(skip);

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: {
        messages,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total,
          hasNext: page < Math.ceil(total / limit),
          hasPrev: page > 1,
        },
        filters: {
          status,
          category,
          priority,
          search,
        },
      },
    });
  } catch (error) {
    console.error("Get messages error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching messages",
    });
  }
};

// @desc    Get single contact message by ID
// @route   GET /api/contact/messages/:id
// @access  Private (admin)
const getMessageById = async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    res.json({
      success: true,
      data: {
        message,
      },
    });
  } catch (error) {
    console.error("Get message by ID error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching message",
    });
  }
};

// @desc    Mark message as read
// @route   PATCH /api/contact/messages/:id/read
// @access  Private (admin)
const markAsRead = async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    await message.markAsRead();

    res.json({
      success: true,
      message: "Message marked as read",
      data: {
        message: message.getPublicData(),
      },
    });
  } catch (error) {
    console.error("Mark as read error:", error);
    res.status(500).json({
      success: false,
      message: "Server error marking message as read",
    });
  }
};

// @desc    Reply to contact message
// @route   POST /api/contact/messages/:id/reply
// @access  Private (admin)
const replyToMessage = async (req, res) => {
  try {
    const { replyMessage } = req.body;
    const message = await Contact.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    await message.markAsReplied(replyMessage);

    // TODO: Send reply email to the contact

    res.json({
      success: true,
      message: "Reply sent successfully",
      data: {
        message: message.getPublicData(),
      },
    });
  } catch (error) {
    console.error("Reply to message error:", error);
    res.status(500).json({
      success: false,
      message: "Server error sending reply",
    });
  }
};

// @desc    Delete contact message
// @route   DELETE /api/contact/messages/:id
// @access  Private (admin)
const deleteMessage = async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    await Contact.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (error) {
    console.error("Delete message error:", error);
    res.status(500).json({
      success: false,
      message: "Server error deleting message",
    });
  }
};

// @desc    Get contact message statistics
// @route   GET /api/contact/messages/stats
// @access  Private (admin)
const getMessageStats = async (req, res) => {
  try {
    const totalMessages = await Contact.countDocuments({ isSpam: false });
    const newMessages = await Contact.countDocuments({
      status: "New",
      isSpam: false,
    });
    const readMessages = await Contact.countDocuments({
      status: "Read",
      isSpam: false,
    });
    const repliedMessages = await Contact.countDocuments({
      status: "Replied",
      isSpam: false,
    });
    const archivedMessages = await Contact.countDocuments({
      status: "Archived",
      isSpam: false,
    });
    const spamMessages = await Contact.countDocuments({ isSpam: true });
    const highPriorityMessages = await Contact.countDocuments({
      priority: { $in: ["High", "Urgent"] },
      status: { $ne: "Archived" },
      isSpam: false,
    });

    // Get message count by category
    const messagesByCategory = await Contact.aggregate([
      { $match: { isSpam: false } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ]);

    // Get recent message activity (last 7 days)
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const recentActivity = await Contact.aggregate([
      {
        $match: {
          createdAt: { $gte: sevenDaysAgo },
          isSpam: false,
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } },
    ]);

    res.json({
      success: true,
      data: {
        overview: {
          total: totalMessages,
          new: newMessages,
          read: readMessages,
          replied: repliedMessages,
          archived: archivedMessages,
          spam: spamMessages,
          highPriority: highPriorityMessages,
        },
        categories: messagesByCategory,
        recentActivity,
      },
    });
  } catch (error) {
    console.error("Get message stats error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching message statistics",
    });
  }
};

module.exports = {
  sendMessage,
  getMessages,
  getMessageById,
  markAsRead,
  replyToMessage,
  deleteMessage,
  getMessageStats,
};
