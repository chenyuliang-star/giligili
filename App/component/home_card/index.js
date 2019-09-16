import React, { Component } from 'react';
import "./index.less";

const arr = new Array(12).fill(1);
class HomeCard extends Component {

    render () {
        return (<div className="home-card-wrap">
            <div className="header-line">
                <i className="icon icon-dongman"></i>
                <h2>动漫</h2>
            </div>
            <ul>
                {
                    arr.map((item, index) => {
                        return (<li key={index}>
                            <a href="javascript: void(0)" target="_blank">
                                <div className="card-item-cover">
                                    <img src="http://jfrft.com/uploads/allimg/190510/312_1017459841.jpg" alt="" />
                                    <p className="home-card-desc">年纪轻轻就崭露头角，在附近一带小有名气的精干冒险者青年迪尔。他因某件委托而踏足进入深邃森林，遇到了骨瘦如柴的幼小魔</p>
                                </div> 
                                <p className="home-card-name">伪恋 第二季</p>
                            </a>
                        </li>)
                    })
                }
            </ul>
            <div className="header-line">
                <i className="icon icon-tuijian"></i>
                <h2>随机推荐</h2>
            </div>
            <ul>
                {
                    arr.map((item, index) => {
                        return (<li key={index}>
                            <a href="javascript: void(0)" target="_blank">
                                <div className="card-item-cover">
                                    <img src="http://jfrft.com/uploads/allimg/190510/312_1017459841.jpg" alt="" />
                                    <p className="home-card-desc">年纪轻轻就崭露头角，在附近一带小有名气的精干冒险者青年迪尔。他因某件委托而踏足进入深邃森林，遇到了骨瘦如柴的幼小魔</p>
                                </div> 
                                <p className="home-card-name">伪恋 第二季</p>
                            </a>
                        </li>)
                    })
                }
            </ul>
        </div>)
    }
}

export default HomeCard;