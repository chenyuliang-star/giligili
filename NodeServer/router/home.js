const express = require('express');
const genDB = require("../../DataServer/dataBase");
const homeRouter = express.Router();

// 获取动漫数据库对象
const animeDB = genDB("anime");
const cardDB = genDB("card");

// 获取首页轮播图的数据
homeRouter.get("/api/getCarouselData", function (req, res) {
    animeDB.find({}, function (err, doc) {
        if (err) { 
            console.log("NodeServer/router/home.js 出现错误", err);
            return ;
        }
        const newFan = doc.slice(0, 3);
        const recommend = doc.slice(3, 6);
        const hot = doc.slice(6, 9);
        res.json({
            newFan,
            recommend,
            hot
        })
    })
})

homeRouter.get("/api/getCardData", function (req, res) {
    animeDB.find({}, function (err, doc) {
        if (err) { 
            console.log("NodeServer/router/home.js 出现错误", err);
            return ;
        }
        const card1 = doc.slice(0, 12);
        const card2 = doc.slice(12, 24);
        res.json({
            card1, card2
        })
    })
})

homeRouter.get("/api/getFeedData", function (req, res) {
    cardDB.find({}, function (err, doc) {
        if (err) { 
            console.log("NodeServer/router/home.js 出现错误", err);
            return ;
        }
        res.json({
            feedData: doc.slice(0, 24)
        })
    })
})

module.exports = homeRouter;