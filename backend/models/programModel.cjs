const mongoose = require("mongoose");
const { requiredNumber } = require("./modelTypes.cjs");

// Destructuring mongooses Schema method into a const //
const { Schema } = mongoose;

// Create new database schema using mongoose.Schema //
const programSchema = new Schema(
  {
    programNo: requiredNumber,
    partId: [{ type: Schema.Types.ObjectID, ref: "Part" }],
    programmer: { type: Schema.Types.ObjectID, ref: "User" },
    operation: requiredNumber,
    operationCycleTime: requiredNumber,
    material: { type: Schema.Types.ObjectID, ref: "Material" },
    fixtures: [{ type: Schema.Types.ObjectID, ref: "Fixture" }],
    status: { type: String, default: "Not Started" },
    notes: String,
  },
  { timestamps: true }
);

// Create mongoose model from creating Schema //
// Given name in first argument is always singular //
const programSchemaModel = mongoose.model("Program", programSchema);

module.exports = programSchemaModel;
