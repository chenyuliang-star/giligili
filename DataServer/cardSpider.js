const Crawler = require('crawler');
const crypto = require("crypto");

const genCard = function (url, cb) {
    const crawler = new Crawler({
        maxConnections: 1,
        callback: function (err, res, done) {
            if (err) {
                console.log("DataServer/cardSpider 出现错误:", err);
                cb(err);
                return ;
            }
            const $ = res.$;
            const $cardImg = $("section.container div.card.box img.card-img-bottom");
            let len = $cardImg.length;
            const resource = [];
            for (let i=0; i<len; i++) {
                let imgSrc =  $($cardImg[i]).attr("src");
                resource.push({
                    imgSrc: imgSrc,
                    hash: crypto.createHash("md5").update(imgSrc).digest("hex")
                })
            }
            cb(null, resource);
            done();
        }
    })
    crawler.queue(url);
}

module.exports = genCard;