// importing modules
const express = require("express");
const app = express();
const router1 = require("./routes/route1")

// app.get("/", (req, res) => {
//   // const username = req.query.username || "myogeshchavan97";
//   try {
//     res.status(200).send("Hello World,First Deployment");
//   } catch (error) {
//     res.status(400).send("Error while getting list of repositories");
//   }
// });

// middlewares
app.use("/", router1)

// creating server PORT
let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server created, Listening to PORT ${PORT}`);
});
