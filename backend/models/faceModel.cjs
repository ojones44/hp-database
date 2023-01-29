const mongoose = require("mongoose");
const { requiredString } = require("./modelTypes.cjs");

// Destructuring mongooses Schema method into a const //
const { Schema } = mongoose;

// Create new database schema using mongoose.Schema //
const faceSchema = new Schema(
  {
    pallet: { type: Schema.Types.ObjectID, ref: "Pallet" },
    angle: requiredString,
    grided: Boolean,
    programs: [{ type: Schema.Types.ObjectID, ref: "Program" }],
    notes: String,
  },
  { timestamps: true }
);

// Create mongoose model from creating Schema //
// Given name in first argument is always singular //
const faceSchemaModel = mongoose.model("Face", faceSchema);

module.exports = faceSchemaModel;
