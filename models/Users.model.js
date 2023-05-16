const { Schema, model } = require("mongoose");
const countryModel = require("./Countries.model");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {  // no slide da aula estava passwordHash
      type: String,
      required: [true, 'Password is required.']
    },
    nationality: {
      type: String,
    },
    visitedCountires:[ {
      type: Schema.Types.ObjectId,
      ref:"Country",
    }]
  },
  {
    timestamps: true
  },
);

module.exports = model("User", userSchema);