const BreakingNews = require("../Schema/BreakingNews");
const AddingNewsPapers = require("../Schema/AddingNews");
const AddingCategorys = require("../Schema/Category");
const AddingNewsDetail = require("../Schema/AddingNewsDetails");

const path = require("path");
const fs = require("fs-extra");

const AddingNews = async (req, res, next) => {
  const ft = await BreakingNews.find({ SrNo: req.body.srno });

  if (ft.length === 0) {
    let passed = new BreakingNews({
      SrNo: req.body.srno,
      Title: req.body.tittle,
      News: req.body.bnews,
    });

    passed
      .save()
      .then((response) => {
        console.log(response);
        res.status(200).json({ status: "Successfully" });
      })
      .catch((error) => {
        console.log(error);

        error.code == 11000
          ? res.status(406).json({ message: "SrNo Already Exists" })
          : res.json({ error: error });
      });
  } else {
    res.status(400).json({ message: "SrNo Already Exists" });
  }
};

const DeleteBreakingNews = async (req, res, next) => {
  console.log(req.body);
  const ft = await BreakingNews.find({ SrNo: req.body.srno });

  if (ft.length != 0) {
    BreakingNews.findOneAndDelete({ SrNo: req.body.srno })
      .then(async (response) => {
        res.status(200).json({ message: "Successfully" });
      })
      .catch((error) => {
        res.status(400).json({ messages: error });
      });
  } else {
    res.status(400).json({ messages: "Sr.No & Record Does Not Exists" });
  }
};

const AddingNewsPaper = async (req, res, next) => {
  const CreateFolder = (value) => {
    const path = value;

    fs.access(path, (error) => {
      if (error) {
        fs.mkdir(path, { recursive: true }, (error) => {
          if (error) {
            console.log(error);
            return false;
          }
        });
      }
    });
    return true;
  };

  if (
    CreateFolder(`./NewsPaperPDF/${req.body.year}/${req.body.month}`) == true
  ) {
    const fileName = req.body.Date;

    const file = req.files.files;
    let reqPath = path.join(__dirname, "../../");
    console.log();
    let uploadPath2 =
      "NewsPaperPDF/" +
      `${req.body.year}/` +
      `${req.body.month}/` +
      `${fileName + ".pdf"}`;

    let uploadPath =
      reqPath +
      "NewsPaperPDF/" +
      `${req.body.year}/` +
      `${req.body.month}/` +
      `${fileName + ".pdf"}`;

    const ft = await AddingNewsPapers.find({ NewsPaperDate: fileName });

    if (ft.length != 0) {
      res.status(400).json({ message: "Date Already Exists" });
      // console.log("database");
    } else {
      let passed = new AddingNewsPapers({
        // SrNo: req.body.srno,
        Path: uploadPath2,
        NewsPaperDate: fileName,
      });
      passed.save();
      file.mv(uploadPath, (err) => {
        if (err) {
          res.status(400).json({ message: err });
        } else {
          // console.log(passed);
          res.status(200).json({ message: "Successfully" });
        }
      });
    }
  } else {
    res
      .status(400)
      .json({ message: "We Have Encountered with Creating Folder" });
  }
};

const AddingCategory = (req, res, next) => {
  try {
    let passed = new AddingCategorys({
      Category: {
        GujCategory: req.body.GujInput,
        EngCategory: req.body.EngInput,
        Colored:req.body.colored

      },
    });
    passed.save();
    res.status(200).json({ message: "Success" });
  } catch (err) {
    res.status(400).json({ message: "failed" });
  }
};

const GetCategory = async (req, res, next) => {
  const ft = await AddingCategorys.find();

  // console.log(ft);
  res.status(200).json(ft);
};

const AddNewsDetail = async (req, res, next) => {
  // const Videofiles = req.files.Videofiles;
  const files = req.files.files;
  // let Videoroute
  // let videoPath;
  // let uploadVideoPath ;
  console.log("data1", req.body);
  console.log("data2", files);
  // console.log("data2", Videofiles);

  // // console.log("data2", req.files);

  const CreateFolder = async (value) => {
    // console.log("value",value );
    const path = value;

    await fs.access(path, (error) => {
      if (error) {
        fs.mkdir(path, { recursive: true }, (error) => {
          if (error) {
            console.log(error);
            // console.log("new error");
            return false;
          }
        });
      }
    });
    // console.log("new suc");
    return true;
  };
  const d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();

  // if (Videofiles !== undefined) {
  //   if ((await CreateFolder(`./Media/Video/${year}/${month}/${day}`)) == true) {
  //     let reqPath = path.join(__dirname, "../../");

  //     let uploadVideoPath =
  //       reqPath +
  //       "/Media/" +
  //       "/Video/" +
  //       `/${year}/` +
  //       `/${month}/` +
  //       `/${day}/` +
  //       `${req.files.Videofiles.name}`;

  //     let Videoroute =
  //       "Media/" +
  //       "/Video/" +
  //       `/${year}/` +
  //       `/${month}/` +
  //       `/${day}/` +
  //       `${req.files.Videofiles.name}`;
  //   }
  // }

  if ((await CreateFolder(`./Media/${year}/${month}/${day}`)) == true) {
    try {
      let reqPath = path.join(__dirname, "../../");

      let uploadPath =
        reqPath +
        "/Media/" +
        `/${year}/` +
        `/${month}/` +
        `/${day}/` +
        `${req.files.files.name}`;

      let route =
        "Media/" +
        `/${year}/` +
        `/${month}/` +
        `/${day}/` +
        `${req.files.files.name}`;

      let data = await AddingCategorys.find({
        "Category.EngCategory": req.body.Category,
      });

      let passed = new AddingNewsDetail({
        EngCategory: req.body.Category,
        GujCategory: data[0].Category.GujCategory,
        Colored:data[0].Category.Colored,
        Path: route,
        NewsTittle: req.body.NewsTittle,
        NewsSubTittle: req.body.NewsSubTittle,
        News: req.body.News,
      });
      passed.save();
      console.log(passed);

      await files.mv(uploadPath, (err) => {
        if (err) {
          res.status(400).json({ message: err });
        } else {
          console.log("passed");
          res.status(200).json({ message: "Successfully" });
        }
      });
    } catch {
      res.status(400).json({ message: "Failed to Store News" });
    }
  }
};

const DeleteCategory = async (req, res, next) => {
  try {
    let data = await AddingCategorys.findOneAndDelete({
      "Category.EngCategory": req.body.EngInput,
    });
    if (data == "null") {
      res.status(400).json({ message: "No Data Found" });
      
      next();
    } else {
      res.status(200).json({ message: "Success" });
    }
  } catch (err) {
    
    res.status(400).json({ message: "failed", errdata: err })
  }
};

const DeleteNewsPaper = async (req, res, next) => {
  // console.log("datra",req.body.Date);

  try {
    let data = await AddingNewsPapers.findOneAndDelete({
      NewsPaperDate: req.body.Date,
    });
    if (data == null) {
      await res.status(404).json({ message: "No Data Found" });
      
      next();
    } else {
      res.status(200).json({ message: "Success" });
    }
  } catch (err) {
    res.status(400).json({ message: "failed", errdata: err });
  }
};

module.exports = {
  AddingNews,
  DeleteBreakingNews,
  AddingNewsPaper,
  AddingCategory,
  GetCategory,
  AddNewsDetail,
  DeleteCategory,
  DeleteNewsPaper,
};
