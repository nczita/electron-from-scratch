const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://test:testPass@localhost:27017/buglogger",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to mongodb");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
