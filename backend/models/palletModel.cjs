const mongoose = require("mongoose");
const { requiredString } = require("./modelTypes.cjs");

// Destructuring mongooses Schema method into a const //
const { Schema } = mongoose;

// Create new database schema using mongoose.Schema //
const palletSchema = new Schema(
  {
    machine: { type: Schema.Types.ObjectID, ref: "Machine" },
    type: requiredString,
    size: requiredString,
    faces: [{ type: Schema.Types.ObjectID, ref: "Face" }],
    notes: String,
  },
  { timestamps: true }
);

// Create mongoose model from creating Schema //
// Given name in first argument is always singular //
const palletSchemaModel = mongoose.model("Pallet", palletSchema);

module.exports = palletSchemaModel;
