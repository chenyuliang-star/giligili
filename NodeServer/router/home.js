const express = require('express');
//const genDB = require("../../DataServer/dataBase");
const homeRouter = express.Router();
const { crawlerAnime } = require("../../DataServer");
// 获取动漫数据库对象
//const animeDB = genDB("anime");
//const cardDB = genDB("card");


homeRouter.get("/api/webSpider", function(req, res) {
    crawlerAnime("http://www.baiwanzy.com/?m=vod-type-id-4.html").then((data) => {
        res.json({
            status: 1
        })
    }).catch((err) => {
        res.json({
            status: -1
        })
    })
})
// // 获取首页轮播图的数据
// homeRouter.get("/api/getCarouselData", function (req, res) {
//    // animeDB.find({}, function (err, doc) {
//         // if (err) { 
//         //     console.log("NodeServer/router/home.js 出现错误", err);
//         //     return ;
//         // }
//         const newFan = findData("anime", 0, 3);
//         const recommend = findData("anime", 0, 3);
//         const hot = findData("anime", 0, 3);
//         res.json({
//             newFan,
//             recommend,
//             hot
//         })
//    // })
// })

// homeRouter.get("/api/getCardData", function (req, res) {
//     // animeDB.find({}, function (err, doc) {
//     //     if (err) { 
//     //         console.log("NodeServer/router/home.js 出现错误", err);
//     //         return ;
//     //     }
//         const card1 = findData("anime", 0, 12);
//         const card2 = findData("anime", 12, 12);
//        // console.log("card1......", card1);
//        // console.log("card2........", card2);
//         res.json({
//             card1, card2
//         })
//    // })
// })

// homeRouter.get("/api/getFeedData", function (req, res) {
//     // cardDB.find({}, function (err, doc) {
//     //     if (err) { 
//     //         console.log("NodeServer/router/home.js 出现错误", err);
//     //         return ;
//     //     }
//         res.json({
//             feedData: findData("card", 0, 24)
//         })
//    // })
// })

module.exports = homeRouter;