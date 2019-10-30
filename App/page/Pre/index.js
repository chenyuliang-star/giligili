import React, { Component } from 'react';
import axios from 'axios';
import "./index.less";

class Pre extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        axios.get("http://localhost:9000/home/api/webSpider").then((res) => {
            console.log(res);
        }).catch((err) => {

        })
    }
    render () {
        return (<div className="pre-wrap">
            {/* <img src="http://s9.rr.itc.cn/r/wapChange/201612_6_21/a978567237726424325.gif" /> */}

        </div>)
    }
}

export default Pre;