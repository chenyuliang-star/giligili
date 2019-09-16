import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCarouselData } from "../../redux/home_redux/action";
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

        //发送数据请求
        this.props.getCarouselData();
    }
    componentWillUnmount () {
        clearInterval(this.interval);
    }
    render () {
        return (<div className="home-carousel-wrap">
            <div className="carousel-content">        
                <ul className="carousel-box" id="carousel-box" style={{ marginLeft: "-" + this.state.cnt + "%"}}>
                    <li>
                        { 
                            this.props.carouselData && 
                            Array.isArray(this.props.carouselData["newFan"]) && 
                            this.props.carouselData["newFan"].map((item) => {
                                return (<a href="#" target="_blank" >
                                    <img src={item.bgImg} />
                                    <p>{item.desc}</p>
                                </a>)
                            })
                        }
                    </li>
                    <li>
                        { 
                            this.props.carouselData && 
                            Array.isArray(this.props.carouselData["recommend"]) && 
                            this.props.carouselData["recommend"].map((item) => {
                                return (<a href="#" target="_blank" >
                                    <img src={item.bgImg} />
                                    <p>{item.desc}</p>
                                </a>)
                            })
                        }
                    </li>
                    <li>
                        { 
                            this.props.carouselData && 
                            Array.isArray(this.props.carouselData["hot"]) && 
                            this.props.carouselData["hot"].map((item) => {
                                return (<a href="#" target="_blank" >
                                    <img src={item.bgImg} />
                                    <p>{item.desc}</p>
                                </a>)
                            })
                        }
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCarouselData }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        carouselData: state.homeRedux.carouselData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeCarousel);