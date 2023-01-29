const mongoose = require("mongoose");
const { requiredUniqueString, requiredString } = require("./modelTypes.cjs");

// Destructuring mongooses Schema method into a const //
const { Schema } = mongoose;

// Create new database schema using mongoose.Schema //
const materialSchema = new Schema(
  {
    materialNo: requiredUniqueString,
    size: requiredString,
    spec: requiredString,
    weight: Number,
    notes: String,
    programs: [{ type: Schema.Types.ObjectID, ref: "Program" }],
  },
  { timestamps: true }
);

// Create mongoose model from creating Schema //
// Given name in first argument is always singular //
const materialSchemaModel = mongoose.model("Material", materialSchema);

module.exports = materialSchemaModel;
