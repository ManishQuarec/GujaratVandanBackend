const BreakingNews = require("../Schema/BreakingNews");
const AddingNewsDetail = require("../Schema/AddingNewsDetails");

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
    next
};

const allNewsData = (req, res, next) => {

  console.log(req.body);
 AddingNewsDetail.find({Category:req.body.data})
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

  console.log(req.body);
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



// find by  Breaking News SrNo

// const findBreakingNewsBySrNo = (req, res, next) => {
//   BreakingNews.findOne({
//     srNo: req.params.srNo,
//   })
//     .then((response) => {
//       res.json({ response });
//     })
//     .catch((error) => {
//       res.json({ error });
//     });
// };

// find by  Breaking News SrNo and Delete

// const findBreakingNewsBySrNoAndDelete = (req, res, next) => {
//     BreakingNews.findOneAndDelete({
//       srNo: req.params.srNo,
//     })
//       .then((response) => {
//         res.json({ response });
//       })
//       .catch((error) => {
//         res.json({ error });
//       });
//   };

module.exports = {
  allBreakingNews, allNews, allNewsData}

