// models/Contact.js - Contact message model schema
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    // Sender information
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [50, "Name cannot exceed 50 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },

    phone: {
      type: String,
      trim: true,
      maxlength: [20, "Phone number cannot exceed 20 characters"],
      match: [/^$|^[\+]?[1-9][\d]{0,15}$/, "Invalid phone number format"],
    },

    company: {
      type: String,
      trim: true,
      maxlength: [100, "Company name cannot exceed 100 characters"],
    },

    // Message details
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      maxlength: [200, "Subject cannot exceed 200 characters"],
    },

    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters"],
      maxlength: [1000, "Message cannot exceed 1000 characters"],
    },

    // Message category
    category: {
      type: String,
      enum: [
        "General Inquiry",
        "Job Opportunity",
        "Collaboration",
        "Freelance Project",
        "Technical Question",
        "Feedback",
        "Other",
      ],
      default: "General Inquiry",
    },

    // Message status
    status: {
      type: String,
      enum: ["New", "Read", "Replied", "Archived"],
      default: "New",
    },

    // Priority level
    priority: {
      type: String,
      enum: ["Low", "Normal", "High", "Urgent"],
      default: "Normal",
    },

    // Technical information
    userAgent: {
      type: String,
      default: "",
    },

    ipAddress: {
      type: String,
      default: "",
    },

    referrer: {
      type: String,
      default: "",
    },

    // Response information
    repliedAt: {
      type: Date,
    },

    replyMessage: {
      type: String,
      maxlength: [2000, "Reply cannot exceed 2000 characters"],
    },

    // Admin notes
    adminNotes: {
      type: String,
      maxlength: [500, "Admin notes cannot exceed 500 characters"],
    },

    // Spam detection
    isSpam: {
      type: Boolean,
      default: false,
    },

    spamScore: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes for better query performance
contactSchema.index({ email: 1, createdAt: -1 });
contactSchema.index({ status: 1, createdAt: -1 });
contactSchema.index({ category: 1, createdAt: -1 });
contactSchema.index({ priority: 1, status: 1 });
contactSchema.index({ isSpam: 1 });

// Virtual for message age
contactSchema.virtual("messageAge").get(function () {
  const now = new Date();
  const diffTime = Math.abs(now - this.createdAt);
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

  if (diffHours < 1) {
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
  } else {
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  }
});

// Pre-save middleware for spam detection
contactSchema.pre("save", function (next) {
  // Simple spam detection logic
  const spamKeywords = [
    "viagra",
    "casino",
    "lottery",
    "winner",
    "congratulations",
    "click here",
  ];
  const messageText = `${this.subject} ${this.message}`.toLowerCase();

  let spamScore = 0;

  // Check for spam keywords
  spamKeywords.forEach((keyword) => {
    if (messageText.includes(keyword)) {
      spamScore += 20;
    }
  });

  // Check for excessive links
  const linkCount = (messageText.match(/http[s]?:\/\//g) || []).length;
  if (linkCount > 3) spamScore += 25;

  // Check for excessive capital letters
  const capsRatio =
    (messageText.match(/[A-Z]/g) || []).length / messageText.length;
  if (capsRatio > 0.5) spamScore += 15;

  // Check message length
  if (this.message.length < 20) spamScore += 10;

  this.spamScore = Math.min(spamScore, 100);
  this.isSpam = spamScore >= 70;

  next();
});

// Static method to get unread messages
contactSchema.statics.getUnreadMessages = function () {
  return this.find({
    status: "New",
    isSpam: false,
  }).sort({ createdAt: -1 });
};

// Instance method to mark as read
contactSchema.methods.markAsRead = async function () {
  if (this.status === "New") {
    this.status = "Read";
    return await this.save();
  }
  return this;
};

// Instance method to mark as replied
contactSchema.methods.markAsReplied = async function (replyMessage = "") {
  this.status = "Replied";
  this.repliedAt = new Date();
  if (replyMessage) {
    this.replyMessage = replyMessage;
  }
  return await this.save();
};

// Instance method to get public data
contactSchema.methods.getPublicData = function () {
  const contactObject = this.toObject();

  // Remove sensitive fields
  delete contactObject.userAgent;
  delete contactObject.ipAddress;
  delete contactObject.adminNotes;
  delete contactObject.spamScore;
  delete contactObject.isSpam;
  delete contactObject.__v;

  return contactObject;
};

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
