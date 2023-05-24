const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connect = () => {
  try {
    mongoose.connect("mongodb+srv://aman123:aman123@cluster0.4jmvhm8.mongodb.net/musicDB");
    console.log("Mongo connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect;
