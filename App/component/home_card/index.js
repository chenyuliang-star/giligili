import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCardData } from "../../redux/home_redux/action";
import "./index.less";

class HomeCard extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getCardData();
    }
    render () {
        return (<div className="home-card-wrap">
            <div className="header-line">
                <i className="icon icon-dongman"></i>
                <h2>动漫</h2>
            </div>
            <ul>
                {
                    this.props.cardData && 
                    Array.isArray(this.props.cardData["card1"]) && 
                    this.props.cardData["card1"].map((item, index) => {
                        return (<li key={index}>
                            <a href="#" target="_blank">
                                <div className="card-item-cover">
                                    <img src={item.bgImg} alt="" />
                                    <p className="home-card-desc">{item.desc}</p>
                                </div> 
                                <p className="home-card-name">{item.name}</p>
                            </a>
                        </li>)
                    })
                }
            </ul>
            <div className="header-line">
                <i className="icon icon-tuijian"></i>
                <h2>推荐</h2>
            </div>
            <ul>
            {
                    this.props.cardData && 
                    Array.isArray(this.props.cardData["card2"]) && 
                    this.props.cardData["card2"].map((item, index) => {
                        return (<li key={index}>
                            <a href="#" target="_blank">
                                <div className="card-item-cover">
                                    <img src={item.bgImg} alt="" />
                                    <p className="home-card-desc">{item.desc}</p>
                                </div> 
                                <p className="home-card-name">{item.name}</p>
                            </a>
                        </li>)
                    })
                }
            </ul>
        </div>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCardData }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        cardData: state.homeRedux.cardData
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeCard);