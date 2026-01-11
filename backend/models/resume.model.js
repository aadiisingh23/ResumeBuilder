import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  thumbnailLink: String,
  template: {
    theme: String,
    colorPalette: [String],
  },
  profileInfo: {
    profileImg: String,          // added
    profilePreviewUrl: String,   // renamed to match default
    fullName: String,
    designation: String,
    summary: String,
  },
  contactInfo: {
    email: { type: String, required: true },
    location: String,
    phone: String,
    linkedin: String,
    github: String,
    website: String,
  },
  workExperience: [
    {
      company: String,
      role: String,
      startDate: String, // keep String to match default
      endDate: String,
      description: String,
    },
  ],
  education: [
    {
      degree: String,
      institution: String,
      startDate: String, // changed to String to match default
      endDate: String,
    },
  ],
  skills: [
    {
      name: String,
      progress: Number,
    },
  ],
  projects: [
    {
      title: String,
      description: String,
      github: String,
      liveDemo: String,
    },
  ],
  certifications: [   // added
    {
      title: String,
      issuer: String,
      year: String,
    },
  ],
  languages: [        // added
    {
      name: String,
      progress: String,
    },
  ],
  interests: [String],
}, {
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  },
});

export default mongoose.model("Resume", ResumeSchema);






// import mongoose from "mongoose";

// const ResumeSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   thumbnailLink: String,
//   template: {
//     theme: String,
//     colorPalette: [String],
//   },
//   profileInfo: {
//     profilePreviewUrl: String,
//     fullName: String,
//     designation: String,
//     summary: String,
//   },
//   contactInfo: {
//     email: { type: String, required: true },
//     location: String,
//     phone: String,
//     linkedin: String,
//     github: String,
//     website: String,
//   },
//   workExperience: [
//     {
//       company: String,
//       role: String,
//       startDate: String,
//       endDate: String,
//       description: String,
//     },
//   ],
//   education: [
//     {
//       degree: String,
//       startDate: Date,
//       endDate: Date,
//       institution: String,
//     },
//   ],
//   skills: [
//     {
//       name: String,
//       progress: Number,
//     },
//   ],
//   projects: [
//     {
//       title: String,
//       description: String,
//       github: String,
//       liveDemo: String,
//     },
//   ],
//   interests: [String],
// }, {
//     timestamps: {
//       createdAt: "createdAt",  
//       updatedAt: "updatedAt",   
//     },
//   }
// );

// export default mongoose.model("Resume", ResumeSchema);