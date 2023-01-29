const mongoose = require("mongoose");
const {
  requiredUniqueString,
  requiredString,
  requiredNumber,
} = require("./modelTypes.cjs");

// Destructuring mongooses Schema method into a const //
const { Schema } = mongoose;

// Create new database schema using mongoose.Schema //
const partSchema = new Schema(
  {
    partNo: requiredUniqueString,
    partName: requiredString,
    issue: requiredNumber,
    handed: Boolean,
    materialSpec: requiredString,
    notes: String,
    programs: [{ type: Schema.Types.ObjectID, ref: "Program" }],
  },
  { timestamps: true }
);

// Create mongoose model from creating Schema //
// Given name in first argument is always singular //
const partSchemaModel = mongoose.model("Part", partSchema);

module.exports = partSchemaModel;
