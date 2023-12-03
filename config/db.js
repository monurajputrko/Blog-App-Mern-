const mongoose = require("mongoose");

require('dotenv').config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.log("error in db.js");
  }
};

module.exports = connectDB;
