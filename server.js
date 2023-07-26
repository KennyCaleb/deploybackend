// importing modules
const express = require("express");
const app = express();
const router1 = require("./routes/route1");
const cors = require("cors");

// middlewares
app.use(express.json());
app.use("/api", router1);
app.use(cors());

// creating server PORT
let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server created, Listening to PORT ${PORT}`);
});
