const mongoose = require("mongoose");
const url =
"mongodb+srv://marathe8459:e89QysKIpJ4TXQG9@cluster0.pt5mi2a.mongodb.net/?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
     
    })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.log("Error: ", error));
};
