const mongoose = require("mongoose");
const {
  requiredUniqueString,
  requiredString,
  requiredNumber,
} = require("./modelTypes.cjs");

// Destructuring mongooses Schema method into a const //
const { Schema } = mongoose;

// Create new database schema using mongoose.Schema //
const fixtureSchema = new Schema(
  {
    fixtureNo: requiredUniqueString,
    fixtureDescription: requiredString,
    operation: requiredNumber,
    weight: Number,
    fixtureMaterial: String,
    notes: String,
    programs: [{ type: Schema.Types.ObjectID, ref: "Program" }],
  },
  { timestamps: true }
);

// Create mongoose model from creating Schema //
// Given name in first argument is always singular //
const fixtureSchemaModel = mongoose.model("Fixture", fixtureSchema);

module.exports = fixtureSchemaModel;
