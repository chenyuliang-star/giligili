import React, { Component, Fragment } from "react";
import HomeHeader from "../../component/home_header";
import HomeCarousel from "../../component/home_carousel";
import WarrningPanel from "../../component/warring_panel";
import HomeCard from "../../component/home_card";
import HomeFeed from "../../component/home_feed";
import "./index.less";

class Home extends Component {
    render () {
        return (<Fragment>
            <HomeHeader />
            <div className="content-box">
                <HomeCarousel />
                <WarrningPanel />
                <div style={{height: "300px"}}>暂存区</div>
                <HomeCard />
                <HomeFeed />
            </div>
        </Fragment>)
    }
}

export default Home;