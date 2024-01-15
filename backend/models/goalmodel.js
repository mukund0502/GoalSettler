const mongoose = require("mongoose");
const goalschema = mongoose.Schema(
  {
    text: {
      type: String,
      require: [true, "please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('goal', goalschema)