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
    injectShadyDom: true,
  })
);


app.get('/needss', (request, response) => {

  const filePath = path.resolve(__dirname, "../", "index.html");
  // const filePath = path.resolve(__dirname, "../../../GujaratVandan Frontend", "index.html");
  // const filePath2 = path.resolve(__dirname, "../../../GujaratVandan Frontend/GujaratVandan/frontend/build", "index.html");

  // const filePath = path.resolve(__dirname, "../../../../var/www/gujaratvandan.com", "index.html");


  console.log("filePath", filePath);




  fs.readFile(filePath, "utf8", async (err, data) => {

    const filePath2 = path.resolve(__dirname, "../../../../var/www/gujaratvandan.com", "index.html");
    console.log(filePath2);
    fs.writeFileSync(filePath2, data)

    console.log(data);
    response.send(data)

  });


  // response.status(200)
  // response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));

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


// app.get('/*', (req, res) => {
//   // Read the contents of the HTML file
//   const html = fs.readFileSync('./index.html', 'utf8');

//   // Modify the HTML as needed based on the requested URL path
//   const modifiedHtml = modifyHtml(html, req.url);

//   console.log(modifiedHtml);
//   // Send the modified HTML as a response to the client
//   res.send(modifiedHtml);
// });

// function modifyHtml(html, url) {
//   // Modify the HTML content based on the requested URL path
//   // For example, replace a placeholder with dynamic content
//   const dynamicContent = getDynamicContent(url);
//   const modifiedHtml = html.replace('{dynamic-content}', dynamicContent);
//   return modifiedHtml;
// }

// function getDynamicContent(url) {
//   // Get dynamic content based on the requested URL path
//   // For example, query a database or generate content based on user input
//   return `<h1>${url}</h1><p>This is the dynamic content for ${url}</p>`;
// }


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
