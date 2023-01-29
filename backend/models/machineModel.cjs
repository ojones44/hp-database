const mongoose = require("mongoose");
const { requiredString, requiredUniqueNumber } = require("./modelTypes.cjs");

// Destructuring mongooses Schema method into a const //
const { Schema } = mongoose;

// Create new database schema using mongoose.Schema //
const machineSchema = new Schema(
  {
    serialNo: requiredUniqueNumber,
    workCentre: requiredString,
    manufacturer: String,
    model: String,
    pallets: [{ type: Schema.Types.ObjectID, ref: "Pallet" }],
    nextService: Date,
    notes: String,
  },
  { timestamps: true }
);

// Create mongoose model from creating Schema //
// Given name in first argument is always singular //
const machineSchemaModel = mongoose.model("Machine", machineSchema);

module.exports = machineSchemaModel;
