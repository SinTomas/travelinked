// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
let mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

let MONGO_URI = `mongodb+srv://SinTomas:${process.env.MONGODB_PASSWORD}@travelink.l3ltdjs.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });