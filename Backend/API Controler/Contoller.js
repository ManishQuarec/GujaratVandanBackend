const express = require("express");
const fileUpload = require('express-fileupload');
const app = express();
app.use(express.json());
app.use(fileUpload());
const router = express.Router();
const Reading = require("../MangoDB/DataBaseAPI/Reading");
const Writing = require ("../MangoDB/DataBaseAPI/Writing")

router.get("/fullnews", Reading.data);
router.post("/AddVideoData", Writing.AddVideoData);
router.post("/DeleteNews", Writing.DeleteNews);
router.get("/allBreakingNews", Reading.allBreakingNews);
router.post('/AddingNews', Writing.AddingNews);
router.post('/DeleteBreakingNews', Writing.DeleteBreakingNews);
router.post('/AddingNewsPaper', Writing.AddingNewsPaper);
router.post('/AddingCategory', Writing.AddingCategory);
router.get('/GetCategory', Writing.GetCategory);
router.post('/AddNewsDetail', Writing.AddNewsDetail);
router.post("/allNews", Reading.allNews);
router.post("/allNews/allBreakingNews", Reading.allNews,Reading.allBreakingNews);
router.post("/allNewsData", Reading.allNewsData);
router.get('/newsPaper', Reading.newsPaper);
router.post('/downloads', Reading.downloads);
router.post('/allNewsDataId', Reading.allNewsDataId);
router.post('/DeleteCategory', Writing.DeleteCategory);
router.post('/findData', Writing.findData);
router.post('/DeleteNewsPaper', Writing.DeleteNewsPaper);

module.exports = router;