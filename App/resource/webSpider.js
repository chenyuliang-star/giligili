/*
网络爬虫，获取资源来源，并且根据相关的信息爬取资源, 并且存到window.localStorage上面
*/
import handleUserLuckyNumber from "./lucky-number";
import getAnime from "./animeSpider";

function crawlerAndStoreResource(url, type, lsName) {
    return new Promise((resolve, reject) => {
        const resource = [];
        switch (type) {
            case "anime": {
                getAnime(url).then((result) => {
                    console.log(result);
                    resolve();
                })
                break;
            }
            case "card": {
                break;
            }
            default: break;
        }
    })
}

export default function webSpider() {
    return new Promise((resolve, reject) => {
        let luckyNumber = window.localStorage.getItem("geligeli_lucky_number");
        if (!luckyNumber) {
            handleUserLuckyNumber();
            luckyNumber = window.localStorage.getItem("geligeli_lucky_number");
        }
        Promise.all([
            crawlerAndStoreResource("http://www.baiwanzy.com/?m=vod-type-id-4.html", "anime")
        ]).then(() => {
            resolve();
        }).catch(() => {
            reject();
        })
    })
}

