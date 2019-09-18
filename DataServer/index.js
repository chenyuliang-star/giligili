const genData = require('./animeSpider');
const genCard = require("./cardSpider");
const genDB = require("./dataBase");

const animeDB = genDB("anime"); //获取动漫数据库对象
const cardDB = genDB("card");

// function handleGenData(err, data) {
//     if (err) {
//         console.log("DataService/index.js 出现错误:", err);
//         return ;
//     }
//     animeDB.create(data, function (err, doc) {
//         if (err) { console.log("DataService/index.js 插入出错!", err); }
//     })
// }
// genData("http://www.baiwanzy.com/?m=vod-type-id-4.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-2.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-3.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-4.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-5.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-6.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-7.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-8.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-9.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-10.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-11.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-12.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-13.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-14.html", handleGenData);
// genData("http://www.baiwanzy.com/?m=vod-type-id-4-pg-15.html", handleGenData);

cardDB.remove({});
function handleGenCard(err, data) {
    if (err) {
        console.log("DataService/index.js 出现错误:", err);
        return ;
    }
    cardDB.create(data, function (err, doc) {
        if (err) { console.log("DataService/index.js 插入出错!", err); }
    })
}
genCard("http://pnext.top/index.php?r=painter%2Findex&id=438", handleGenCard)
genCard("http://pnext.top/index.php?r=painter%2Findex&id=234", handleGenCard)
genCard("http://pnext.top/index.php?r=painter%2Findex&id=393", handleGenCard)
genCard("http://pnext.top/index.php?r=painter/index&id=544", handleGenCard);
genCard("http://pnext.top/index.php?r=painter%2Findex&id=330", handleGenCard);
genCard("http://pnext.top/index.php?r=painter%2Findex&id=238", handleGenCard);
genCard("http://pnext.top/index.php?r=painter%2Findex&id=258", handleGenCard);
genCard("http://pnext.top/index.php?r=painter%2Findex&id=51", handleGenCard);