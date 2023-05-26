const { Schema, model } = require("mongoose");

const offerSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "offer must have a name"],
    },
    company: {
      type: String,
      require: [true, "Company must have a name"],
    },
    country: {
      type: String,
      require: [true, "Country is required"],
    },

    img: {
      type: String,
      require: [true, "image is required"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    candidateName: {
      type: String,
      required: [true, "Candidate name is required"],
    },
    candidateEmail: {
      type: String,
      required: [true, "Candidate email is required"],
    },
    candidateResume: {
      type: String,
      required: [true, "Candidate resume is required"],
    },
    candidatePhone: {
      type: String,
      required: [true, "Candidate phone is required"],
    },
    candidateLinkedIn: {
      type: String,
    },
    candidateEducation: {
      type: String,
      required: [true, "Candidate education is required"],
    },

    candidateTechnologies: {
      type: String,
      required: [true, "Candidate Technologies is required"],
    },
    candidateSkills: {
      type: String,
      required: [true, "Candidate skills is required"],
    },

    candidatePDF: {
      type: String,
      required: [true, "Candidate pdf is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Offer = model("offer", offerSchema);

module.exports = Offer;
