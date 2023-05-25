const { Schema, model } = require("mongoose");

const jobSchema = new Schema(
  {
    title: {
      type: String,
      require: [true, "Title is required"],
      minlength: [4, "Title is short"],
    },

    description: {
      type: String,
      require: [true, "Description is required"],
      minlength: [4, "Description is short"],
    },
    company: {
      type: String,
      require: [true, "Company is required"],
      minlength: [4, "Company's name is short"],
      maxlength: [25, "Company passed maxlength"],
    },
    country: {
      type: String,
      require: [true, "Country is required"],
      maxlength: [20, "Country passes maxlength"],
    },
    img: {
      type: String,
      require: [true, "image is required"],
    },
    requires: {
      type: [String],
      require: [true, "Description is required"],
      minlength: [4, "Description is short"],
    },
    qualifications: {
      type: [String],
      required: [true, "Qualifications are required"],
      minlength: [1, "At least one qualification is required"],
    },
    availability: {
      type: Boolean,
      require: [true, "Need to define avaiability"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Job = model("job", jobSchema);

module.exports = Job;
