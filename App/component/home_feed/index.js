import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFeedData } from "../../redux/home_redux/action";
import "./index.less";

class HomeFeed extends Component {
    constructor(props) {
        super(props);
        this.handleError = this.handleError.bind(this);
    }
    componentDidMount () {
        this.props.getFeedData();
    }
    handleError (e) {
        e.target.style = "display: none";
    }
    render () {
        return (<div className="home-feed-wrap">
            <div className="feed-topline">
                <i className="icon icon-tuche"></i>
                <h2>图册</h2>
            </div>
            <ul>
                { this.props.feedData && 
                  Array.isArray(this.props.feedData["feedData"]) && this.props.feedData["feedData"].map((item, index) => {
                    return (<li key={index}><img src={item.imgSrc} alt="图册" onError={this.handleError}/></li>)
                })}
            </ul>
        </div>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getFeedData }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        feedData: state.homeRedux.feedData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeed);