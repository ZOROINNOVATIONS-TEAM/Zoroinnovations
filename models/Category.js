const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    unique: true,
    trim: true,
  },
  description: String,
  icon: String, // Store a path or name for an icon
  isActive: {
    type: Boolean,
    default: true,
  },
  jobCount: {
    type: Number,
    default: 0,
  },
  displayOrder: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Category', categorySchema);