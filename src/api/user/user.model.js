const { Schema, model, models } = require("mongoose");

const emailRegex = new RegExp("[a-zA-Z0-9]{5,}@[a-z]{3,10}.com");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
      minlength: [4, "Name short"],
      maxlength: [15, "Name under max length"],
    },

    email: {
      type: String,
      required: true,
      match: [emailRegex, "invalid email"],
      validate: [
        {
          async validator(value) {
            try {
              const user = await models.user.findOne({ email: value });
              return !user;
            } catch (error) {
              return false;
            }
          },
          message: "email already exist",
        },
      ],
    },

    phone: {
      type: String,
      minlength: [10, "Phone must have 10 characters"],
    },

    password: {
      type: String,
      required: true,
    },

    city: {
      type: String,
    },

    image: {
      type: String,
    },
    availabilty: {
      type: Boolean,
    },
    offers: {
      type: [{ type: Schema.Types.ObjectId, ref: "offer" }],
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model("user", userSchema);

module.exports = User;
