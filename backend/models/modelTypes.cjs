// Creating a const that holds info for required strings / numbers etc. //

const requiredString = {
  type: String,
  required: [true, "Required field..."],
};

const requiredUniqueString = {
  type: String,
  required: [true, "Please input..."],
  unique: true,
};

const requiredNumber = {
  type: Number,
  required: [true, "Required field..."],
};

const requiredUniqueNumber = {
  type: Number,
  required: [true, "Please input..."],
  unique: true,
};

module.exports = {
  requiredString,
  requiredUniqueString,
  requiredNumber,
  requiredUniqueNumber,
};
