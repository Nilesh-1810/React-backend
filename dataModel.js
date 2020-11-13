const mongoose = require("mongoose");
var Data = mongoose.model(
  "Data",
  {
    FirstName: { type: String },
    LastName: { type: String },
    MobileNo: { type: String},
    Email: { type: String },
    Dob: { type: String },
    bio: { type: String },
  },
  "user"
);
module.exports = { Data };