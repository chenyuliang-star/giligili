const express = require('express');
const genDB = require("../../DataServer/dataBase");
const homeRouter = express.Router();

// 获取动漫数据库对象
const animeDB = genDB("anime");

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

module.exports = homeRouter;