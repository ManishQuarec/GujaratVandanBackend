const BreakingNews = require("../Schema/BreakingNews");
const AddingNewsDetail = require("../Schema/AddingNewsDetails");
const AddingNews = require("../Schema/AddingNews");

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

const allNews = (req, res, next) => {
  console.log(req.body.data);
  AddingNewsDetail.find( )
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
  AddingNews.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      console.log("error", error);
      res.json({ error });
    });
};

const downloads =async (req, res, next) => {
  console.log("data");
  await res.download("new.pdf")
  // AddingNews.find()
  //   .then((response) => {
  //     res.json({ response });
  //   })
  //   .catch((error) => {
  //     console.log("error", error);
  //     res.json({ error });
  //   });
};

module.exports = {
  allBreakingNews,
  allNews,
  allNewsData,
  newsPaper,
  downloads,
  allNewsDataId
};
