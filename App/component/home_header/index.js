import React, { Component } from 'react';
import navItemArray from "./navItemData";
import "./index.less";

class HomeHeader extends Component {

    render () {
        return (<header className="home-header-wrap">
            <nav className="home-header-nav">
                <ul>
                    { navItemArray.map((item) => {
                        return (<li key={item.name}><a href={item.href} >{item.name}</a></li>)
                    })}
                </ul>
            </nav>
        </header>)
    }
}

export default HomeHeader;