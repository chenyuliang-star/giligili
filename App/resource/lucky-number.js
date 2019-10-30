/*
生成当前用户的幸运数字
*/
const luckyNumberMin = 10;
const luckyNumberMax = 500;

export default function handleUserLuckyNumber () {
    //判断今天该用户是否进入过网站，存在幸运数字
    let luckyNumber = window.localStorage.getItem("geligeli_lucky_number");
    let expires = window.localStorage.getItem("geligeli_lucky_number_expires");
    let currentData = +Date.now();
    if (luckyNumber && expires && (currentData - (+expires) < 24 * 3600 * 1000)) { //如果存在，那么就使用它, 并且未过期
        window.geligeli_lucky_number = luckyNumber;
    } else { //如果不存在，那么就新生成一个
        luckyNumber = Math.floor(Math.random() * (luckyNumberMax - luckyNumberMin + 1 ) + luckyNumberMin);
        window.localStorage.setItem("geligeli_lucky_number", luckyNumber);
        window.localStorage.setItem("geligeli_lucky_number_expires", currentData);
    }
}