const BreakingNews = require("../Schema/BreakingNews");
const AddingNewsDetail = require("../Schema/AddingNewsDetails");
const AddingNewsPapers = require("../Schema/AddingNews");
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");


//Find All Breaking News

const allBreakingNews = (req, res, next) => {
  BreakingNews.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      console.log("error", error);
      res.json({ error });
    });
  next;
};

const allNewsData = (req, res, next) => {
  console.log(req.body);
  AddingNewsDetail.find({ EngCategory: req.body.data })
    .then((response) => {
      console.log(response);
      // next
      // console.log(response);
      res.json({ response });
    })
    .catch((error) => {
      console.log("error", error);
      res.json({ error });
    });
};

const allNewsDataId = (req, res, next) => {
  console.log(req.body);
 

  AddingNewsDetail.find({ _id: req.body.data })
    .then((response) => {
      // next
      // console.log(response);
      res.json({ response });
    })
    .catch((error) => {
      console.log("error", error);
      res.json({ error });
    });

    
};


const data = (req,res,next) => {

  const filePath = path.resolve(__dirname, "./frontend/public", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Home Page")
      .replace(/__DESCRIPTION__/g, "Home page description.");

    res.send(data)
  });
  app.use(express.static(path.resolve(__dirname, "./frontend/public")))
}



const allNews = (req, res, next) => {
  // console.log(req);
  AddingNewsDetail.find()
    .then((response) => {
      // next
      // console.log(response);
      res.json({ response });
    })
    .catch((error) => {
      console.log("error", error);
      res.json({ error });
    });
};

const newsPaper = (req, res, next) => {
  // console.log(req);
  // const drt = AddingNewsPapers.getLastInsertedDocument.find();
  // console.log(drt);


  AddingNewsPapers.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      console.log("error", error);
      res.json({ error });
    });
};

const downloads = async (req, res, next) => {
  console.log(req.body.url);
  await res.download(req.body.url)

};

module.exports = {
  allBreakingNews,
  allNews,
  allNewsData,
  newsPaper,
  downloads,
  allNewsDataId,
  data
};
