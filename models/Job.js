const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    minlength: [3, 'Title must be at least 3 characters'],
    maxlength: [200, 'Title cannot be more than 200 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    minlength: [50, 'Description must be at least 50 characters'],
    maxlength: [5000, 'Description cannot be more than 5000 characters'],
  },
  department: {
    type: String,
    required: [true, 'Please select a department'],
    enum: ['Engineering', 'Design', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations', 'Customer Support', 'Product Management'], // Add all valid enums
  },
  employmentType: {
    type: String,
    required: [true, 'Please select an employment type'],
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
  },
  workType: {
    type: String,
    required: [true, 'Please select a work type'],
    enum: ['Remote', 'Hybrid', 'On-site'],
  },
  location: {
    city: String,
    state: String,
    country: String,
    isRemote: {
      type: Boolean,
      default: false,
    },
  },
  salary: {
    min: {
      type: Number,
      min: [0, 'Minimum salary must be a positive number'],
    },
    max: {
      type: Number,
      min: [0, 'Maximum salary must be a positive number'],
    },
    currency: {
      type: String,
      enum: ['USD', 'INR', 'EUR', 'GBP', 'AUD', 'CAD'], // Add all valid currencies
    },
    period: {
      type: String,
      enum: ['per annum', 'per month', 'per hour'],
    },
  },
  requirements: {
    skills: [String],
    experience: {
      min: Number, // years
      max: Number,
    },
    education: [String], // e.g., "Bachelor's", "Master's", "PhD"
    certifications: [String],
  },
  responsibilities: [String],
  benefits: [String],
  applicationDeadline: {
    type: Date,
    // Custom validation for future date
    validate: {
      validator: function(v) {
        return v > Date.now();
      },
      message: props => `${props.value} is not a future date!`,
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  isUrgent: {
    type: Boolean,
    default: false,
  },
  openings: {
    type: Number,
    default: 1,
    min: [1, 'Openings must be at least 1'],
  },
  applicationsCount: {
    type: Number,
    default: 0,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User', // Assuming you'll have a User model for admin/team members
  },
  hiringManager: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  tags: [String],
  slug: String, // Will generate this from title
  seoTitle: String,
  seoDescription: String,
}, {
  timestamps: true, // Adds createdAt and updatedAt
});

// Pre-save hook to generate slug
jobSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
  next();
});


module.exports = mongoose.model('Job', jobSchema);