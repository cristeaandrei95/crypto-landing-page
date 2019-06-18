import React, { Component, useState } from 'react'; 
import Logo from './assets/logo.png';
import Download from './assets/download.png';

function Drawer() {
    const [ drawer, toggleDrawer ] = useState(false);

    return (
        <div class="drawer__wrapper">
            <div class="drawer__hamburger" onClick={() => toggleDrawer(!drawer)}></div>
            <div class={`drawer__modal${!drawer ? '-hidden' : ''}`} >
                <div class="drawer__close" onClick={() => toggleDrawer(!drawer)}></div>
                <ul> 
                    <li>
                        <a href="#">news</a>
                    </li>
                    <li>
                        <a href="#">roadmap</a>
                    </li>
                    <li>
                        <a href="#">raising money</a>
                    </li>
                    <li>
                        <a href="#">ico payment</a>
                    </li>
                    <li>
                        <a href="#">ico payment</a>
                    </li>
                    <li>
                        <a href="#">faq</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default class Header extends Component {
  render() {
    return (
        <header>
            <Drawer />
            <div className="logo">
                <a href="#">
                    <img src={Logo} alt="logo"/>
                </a>
            </div>
            <nav>
                <a href="#">news</a>
                <a href="#">roadmap</a>
                <a href="#">raising money</a>
                <a href="#">team</a>
                <a href="#">ico payment</a>
                <a href="#">faq</a>
                <a href="#" className="whitepaper">
                    <img src={Download} alt="download file ico"/>
                    whitepaper
                </a>
            </nav>
        </header>
    )
  }
}
