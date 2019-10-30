import Crawler from 'crawler';

const genAnime = function (url) { // 传入爬取页面的url, 通过传入的处理函数 来处理数据
    //第一阶段 爬取当前页面的资源信息，根据此信息进入每个资源的详情页面进行爬取
    return new Promise((resolve, reject) => {
        const dataInfo = []; //爬取的当前页面的资源信息
        const crawler = new Crawler({ //生成页面爬虫器
            maxConnections: 1,
            callback: function (err, res, done) {
                if (err) { //出现错误
                    console.log("DataServer/webSpider 爬虫出现错误：", err);
                    reject(err);
                    return ;
                } else {
                    const $ = res.$;
                    const ulArr = $("div.xing_vb").find("ul");
                    const len = ulArr.length;
                    const preStr = "http://www.baiwanzy.com";
                    for (let i=0; i<len; i++) {
                        let $a = $(ulArr[i]).find("a");
                        let href = $a.attr("href");
                        href && dataInfo.push({
                            href: preStr + href
                        }) 
                    }
                    dataInfo.pop();
                    resolve(dataInfo);
                    done();
                }
            }
        })
        crawler.queue(url);
    })
}

//第二阶段，进入详情页面获取全部信息
const handleDataInfo = function (dataInfo, cb) {
    const crawler = new Crawler({
        maxConnections: 1,
        callback: function (err, res, done) {
            if (err) { 
                console.log("DataServer/webSpider 爬虫出现错误：", err);
                cb(err);
                return ;
            }
            else { 
                const resource = [];
                const $ = res.$;
                const $vodh = $("div.vodh");
                const $children = $("div.vodinfobox").find("ul li span");
                const $resource = $($("div.ibox.playBox div.vodplayinfo ul")[0]).find("li");

                for (let i=0; i<$resource.length; i++) {
                    let text = $($resource[i]).text();
                    resource.push(text.split("$")[1]);
                }
                let result = {
                    name: $vodh.find("h2").text() || "", //动漫名
                    score: $vodh.find("label").text() || "0.0", //评分
                    status: $vodh.find("span").text() || null, //状态 连载 or 完结
                    director: $($children[1]).text() || "", //导演
                    starring: $($children[2]).text() || "", //主演
                    time: $($children[8]).text() || "" , //更新时间
                    bgImg: "http://www.baiwanzy.com" + $("div.vodImg").find("img").attr("src"), //动漫图片,
                    desc: $($("div.ibox.playBox div.vodplayinfo")[1]).text() || "", //动漫描述
                    hot: 0, //动漫热度
                    tags: [], //动漫类型
                    resource: resource || [], //资源
                    alternateResource: [], //备用资源
                };
                cb(null, result);
            }
            done();
        }
    });

    //爬取所有的详细信息
    const queue = [];
    dataInfo.forEach((item) => {
        queue.push(item.href);
    })
    crawler.queue(queue);
}

export default genAnime;