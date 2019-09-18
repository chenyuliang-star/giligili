const mongoose = require("mongoose");
const DATABASE_URL = "mongodb://localhost:27017/giligili";

mongoose.connect(DATABASE_URL); //连接数据库

const models = {
    anime: {
        name: { type: String, require: true}, //动漫名
        score: { type: String, require: true}, //评分
        status: { type: String, require: true}, //状态 连载 or 完结
        director: { type: String, require: true}, //导演
        starring: { type: String, require: true}, //主演
        time: { type: String, require: true}, //更新时间
        bgImg: { type: String, require: true}, //动漫图片
        desc: { type: String, require: true}, //动漫描述
        hot: { type: Number, require: true}, //动漫热度
        tags: { type: Array, require: true}, //动漫类型
        resource: { type: Array, require: true}, //资源
        alternateResource: { type: Array, require: true}, //备用资源
    },
    card: { 
        imgSrc: { type: String, require: true }, //图片路径
        hash: { type: String, require: true }, //图片路径的hash值
    }
}

for (let model in models) {
    mongoose.model(model, new mongoose.Schema(models[model]));
}

module.exports = function (model) {
    return mongoose.model(model);
}