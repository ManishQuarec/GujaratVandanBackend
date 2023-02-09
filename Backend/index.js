const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const fileUpload = require('express-fileupload');

const app = express();
app.use(fileUpload());

app.use(cors());
const controller = require('./API Controler/Contoller')



mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/playground");
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Connected Successfully");
});



app.use(express.json());
app.use('/call' ,controller)

app.use("/Media", express.static("Media"));
// console.log(process.env.PORT);


app.get("/new", (req, res) => {
  res.end('Hello World\n');
})
// app.post("/data", (req, res) => {
//   let passed = new dataBase({
//     SrNo: req.body.srno,
//     Title: req.body.tittle,
//     News: req.body.bnews,
//   });

//   passed
//     .save()
//     .then((response) => {
//       console.log(response);
//       res.status(200).json({ status: "Success" });
//     })
//     .catch((error) => {
//       console.log(error);

//       error.code == 11000
//         ? res.status(406).json({message:"SrNo Already Exists", status:406})
//         : res.json({ error: error });
//     });
// });


app.listen(5000, () => {
  console.log("listening Data");
});
