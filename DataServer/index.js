const genData = require('./webSpider');
const genDB = require("./dataBase");

const animeDB = genDB("anime"); //获取动漫数据库对象

animeDB.remove({}, function () {});
genData("http://www.baiwanzy.com/?m=vod-type-id-4.html", function (err, data) {
    if (err) {
        console.log("DataService/index.js 出现错误:", err);
        return ;
    }
    animeDB.create(data, function (err, doc) {
        if (err) { console.log("插入出错!"); }
    })
})