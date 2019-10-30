const { genAnime, genDataInfo } = require('./animeSpider');
const genCard = require("./cardSpider");

function crawlerAnime(url) {
    return new Promise((resolve, reject) => {
        genAnime(url).then((result) => {
            return genDataInfo(result);
        }).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports = {
    crawlerAnime,
}
// function DataService() {
//     this.animeData = [];
//     this.cardData = [];
//     this.handleGenAnimeData = this.handleGenAnimeData.bind(this);
//     this.handleGenCardData = this.handleGenCardData.bind(this);
//     this.down = this.down.bind(this);
//     this.getSizeOfCard = this.getSizeOfCard.bind(this);
//     this.getSizeOfAnime = this.getSizeOfAnime.bind(this);
//     this.findData  = this.findData.bind(this);
// }
// DataService.prototype.update = function () {
//     const that = this;
//     that.down();
//     //对动漫资源的更新
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-2.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-3.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-4.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-5.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-6.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-7.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-8.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-9.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-10.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-11.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-12.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-13.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-14.html", that.handleGenAnimeData);
//     genAnime("http://www.baiwanzy.com/?m=vod-type-id-4-pg-15.html", that.handleGenAnimeData);

//     //对卡片资源的跟新
//     genCard("http://pnext.top/index.php?r=painter%2Findex&id=438", that.handleGenCardData)
//     genCard("http://pnext.top/index.php?r=painter%2Findex&id=234", that.handleGenCardData)
//     genCard("http://pnext.top/index.php?r=painter%2Findex&id=393", that.handleGenCardData)
//     genCard("http://pnext.top/index.php?r=painter/index&id=544", that.handleGenCardData);
//     genCard("http://pnext.top/index.php?r=painter%2Findex&id=330", that.handleGenCardData);
//     genCard("http://pnext.top/index.php?r=painter%2Findex&id=238", that.handleGenCardData);
//     genCard("http://pnext.top/index.php?r=painter%2Findex&id=258", that.handleGenCardData);
//     genCard("http://pnext.top/index.php?r=painter%2Findex&id=51", that.handleGenCardData);

// }

// DataService.prototype.handleGenAnimeData = function (err, data) {
//     const that = this;
//     if (err) {
//         console.log("DataService/index.js 出现错误:", err);
//         return ;
//     }
//     that.animeData.push(data);
// }

// DataService.prototype.handleGenCardData = function (err, data) {
//     const that = this;
//     if (err) {
//         console.log("DataService/index.js 出现错误:", err);
//         return ;
//     }
//     that.cardData.push(...data);
// }

// DataService.prototype.down = function () {
//     const that = this;
//     that.animeData = that.cardData = [];
// }

// DataService.prototype.getSizeOfCard = function () {
//     const that = this;
//     return that.cardData.length;
// }

// DataService.prototype.getSizeOfAnime = function () {
//     const that = this;
//     return that.animeData.length;
// }

// DataService.prototype.findData = function (type, left = 0, size = 1) {
//     const that = this;
//     switch (type) {
//         case "anime": { 
//             console.log("命中了。。。。", that.animeData );
//             return that.animeData.slice(left, left+size);
//         }
//         case "card": { 
//             return that.cardData.slice(left, left+size);
//         }
//         default: return [];
//     }
// }

// const ds = new DataService();

// (async () => {
//     ds.update(); 
// })();
// let interval = setInterval(async () => {
//    ds.update(); 
// }, 1000 * 3600 * 24);

// module.exports = {
//     getSizeOfCard: ds.getSizeOfAnime,
//     getSizeOfAnime: ds.getSizeOfAnime,
//     findData: ds.findData
// }
// module.exports = {
//     genData,
//     genCard
// }
// const genDB = require("./dataBase");

// const animeDB = genDB("anime"); //获取动漫数据库对象
// const cardDB = genDB("card");



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

// cardDB.remove({});
// function handleGenCard(err, data) {
//     if (err) {
//         console.log("DataService/index.js 出现错误:", err);
//         return ;
//     }
//     cardDB.create(data, function (err, doc) {
//         if (err) { console.log("DataService/index.js 插入出错!", err); }
//     })
// }
// genCard("http://pnext.top/index.php?r=painter%2Findex&id=438", handleGenCard)
// genCard("http://pnext.top/index.php?r=painter%2Findex&id=234", handleGenCard)
// genCard("http://pnext.top/index.php?r=painter%2Findex&id=393", handleGenCard)
// genCard("http://pnext.top/index.php?r=painter/index&id=544", handleGenCard);
// genCard("http://pnext.top/index.php?r=painter%2Findex&id=330", handleGenCard);
// genCard("http://pnext.top/index.php?r=painter%2Findex&id=238", handleGenCard);
// genCard("http://pnext.top/index.php?r=painter%2Findex&id=258", handleGenCard);
// genCard("http://pnext.top/index.php?r=painter%2Findex&id=51", handleGenCard);