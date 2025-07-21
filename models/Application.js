const mongoose = require('mongoose');
const validator = require('validator'); // For email validation

const applicationSchema = mongoose.Schema({
  jobId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Job',
    required: true,
  },
  applicant: {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      minlength: [2, 'First name must be at least 2 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      minlength: [2, 'Last name must be at least 2 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: false, // An applicant can apply to multiple jobs with the same email
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      validate: {
        validator: function(v) {
          return /\+?\d{10,15}$/.test(v); // Basic phone number regex (adjust as needed)
        },
        message: props => `${props.value} is not a valid phone number!`,
      },
    },
    location: {
      city: String,
      state: String,
      country: String,
    }
  },
  resume: {
    filename: String,
    originalName: String,
    fileUrl: String, // URL to stored resume (e.g., S3, local static)
    fileSize: Number, // In bytes
    uploadedAt: Date,
  },
  coverLetter: {
    type: String,
    maxlength: [2000, 'Cover letter cannot exceed 2000 characters'],
  },
  portfolioUrl: String,
  linkedinUrl: String,
  githubUrl: String,
  expectedSalary: {
    amount: {
      type: Number,
      min: [0, 'Expected salary must be a positive number'],
    },
    currency: String,
    period: String,
  },
  availableStartDate: Date,
  yearsOfExperience: {
    type: Number,
    min: [0, 'Years of experience cannot be negative'],
  },
  skills: [String],
  status: {
    type: String,
    enum: ['applied', 'screening', 'interview', 'rejected', 'hired', 'withdrawn'],
    default: 'applied',
  },
  stages: [{
    stage: String,
    status: String,
    date: Date,
    notes: String,
    interviewer: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  }],
  notes: [{
    addedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    note: String,
    isInternal: {
      type: Boolean,
      default: false,
    },
    addedAt: {
      type: Date,
      default: Date.now,
    },
  }],
  source: {
    type: String,
    enum: ['website', 'linkedin', 'referral', 'job_board', 'other'],
  },
  referredBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
}, {
  timestamps: true,
});

// Post-save hook to increment applicationsCount on the Job
applicationSchema.post('save', async function() {
  await mongoose.model('Job').findByIdAndUpdate(
    this.jobId,
    { $inc: { applicationsCount: 1 } },
    { new: true }
  );
});

// Pre-remove hook to decrement applicationsCount on the Job
applicationSchema.pre('remove', async function(next) {
  await mongoose.model('Job').findByIdAndUpdate(
    this.jobId,
    { $inc: { applicationsCount: -1 } },
    { new: true }
  );
  next();
});


module.exports = mongoose.model('Application', applicationSchema);