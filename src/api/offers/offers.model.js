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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Offer = model("offer", offerSchema);

module.exports = Offer;
