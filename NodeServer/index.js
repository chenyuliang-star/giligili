const express = require('express');
const { homeRouter } = require('./router');
const app = express();

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Head", "Content-Type");
    next();
})
// 首页路由接口
app.use("/home", homeRouter);

app.listen("9000", function () {
    console.log("http://localhost:9000端口服务器已经开启!");
})