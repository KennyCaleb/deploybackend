// importing modules
const express = require("express");
const app = express();

// creating server PORT
let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server created, Listening to PORT ${PORT}`);
});
