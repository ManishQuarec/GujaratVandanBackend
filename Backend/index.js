const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require("fs");

const fileUpload = require('express-fileupload');
const rendertron = require('rendertron-middleware');


const app = express();
app.use(fileUpload());

app.use(cors());
const controller = require('./API Controler/Contoller')
app.use(express.json());



mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/playgrounded");
const db = mongoose.connection;
const path = require("path");

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Connected Successfully");
});

app.use(
  rendertron.makeMiddleware({
    proxyUrl: 'http://my-rendertron-instance/render',
    injectShadyDom:true,
  })
);


app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});


// app.get("/need", (req, res) => {
//   const filePath = path.resolve(__dirname, "./MangoDB/DataBaseAPI/frontend/build", "index.html");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }

//     data = data
//       .replace(/__TITLE__/g, "Home Page")
//       .replace(/__DESCRIPTION__/g, "Home page description.");

//       console.log(data);
//     res.send(data)
//   });
// });



app.use('/call', controller)

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


// app.use(express.static(path.resolve(__dirname, "./MangoDB/DataBaseAPI/frontend/build")))

app.listen(5000, () => {
  console.log("listening Data");
});
