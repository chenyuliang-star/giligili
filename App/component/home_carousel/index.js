import React, { Component } from 'react';
import "./index.less";

class HomeCarousel extends Component {
    constructor (props) {
        super(props);
        this.interval = null;
        this.state = {
            cnt: 0
        }
        this.setCarouseInterval = this.setCarouseInterval.bind(this);
    }
    setCarouseInterval () {
        this.interval = setInterval(() => {
            this.setState((state, props) => {
                return {
                    cnt: (state.cnt + 100) % 300
                }
            })
        }, 5000);
    }
    componentDidMount () {
        const that = this;
        this.setCarouseInterval();
        const carouselDom = document.getElementById("carousel-box");
        carouselDom.addEventListener("mouseover", function () {
            clearInterval(that.interval);
        })
        carouselDom.addEventListener("mouseout", function () {
            that.setCarouseInterval();
        })
    }
    componentWillUnmount () {
        clearInterval(this.interval);
    }
    render () {
        return (<div className="home-carousel-wrap">
            <div className="carousel-content">        
                <ul className="carousel-box" id="carousel-box" style={{ marginLeft: "-" + this.state.cnt + "%"}}>
                    <li>
                        <a href="#" target="_blank" >
                            <img src="http://jfrft.com/uploads/allimg/190509/312_1539117751.jpg" />
                            <p>期待在地下城邂逅有错吗第二季收藏</p>
                        </a>
                        <a href="#" target="_blank" >
                            <img src="http://jfrft.com/uploads/allimg/190509/312_1539117751.jpg" />
                            <p>期待在地下城邂逅有错吗第二季收藏</p>
                        </a>
                        <a href="#" target="_blank" >
                            <img src="http://jfrft.com/uploads/allimg/190509/312_1539117751.jpg" />
                            <p>期待在地下城邂逅有错吗第二季收藏</p>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" >
                            <img src="http://jfrft.com/uploads/allimg/190510/312_1038119421.jpg" />
                            <p>期待在地下城邂逅有错吗第二季收藏</p>
                        </a>
                        <a href="#" target="_blank" >
                            <img src="http://jfrft.com/uploads/allimg/190510/312_1038119421.jpg" />
                            <p>期待在地下城邂逅有错吗第二季收藏</p>
                        </a>
                        <a href="#" target="_blank" >
                            <img src="http://jfrft.com/uploads/allimg/190510/312_1038119421.jpg" />
                            <p>期待在地下城邂逅有错吗第二季收藏</p>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" >
                            <img src="http://jfrft.com/uploads/allimg/190510/312_1017459841.jpg" />
                            <p>期待在地下城邂逅有错吗第二季收藏</p>
                        </a>
                        <a href="#" target="_blank" >
                            <img src="http://jfrft.com/uploads/allimg/190510/312_1017459841.jpg" />
                            <p>期待在地下城邂逅有错吗第二季收藏</p>
                        </a>
                        <a href="#" target="_blank" >
                            <img src="http://jfrft.com/uploads/allimg/190510/312_1017459841.jpg" />
                            <p>期待在地下城邂逅有错吗第二季收藏</p>
                        </a>
                    </li>
                </ul>
                <ul className="choice-box">
                    <li><p className={this.state.cnt === 0 ? "choiced-item" : ""}>新番</p></li>
                    <li><p className={this.state.cnt === 100 ? "choiced-item" : ""}>推荐</p></li>
                    <li><p className={this.state.cnt === 200 ? "choiced-item" : ""}>热度</p></li>
                </ul>
            </div>
            <div className="recommend-up">
                up推荐区
            </div>
        </div>)
    }
}

export default HomeCarousel;