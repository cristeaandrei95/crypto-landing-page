import React, { Component } from 'react'; 
import Logo from './assets/logo.png';
import Download from './assets/download.png';

export default class Header extends Component {
  render() {
    return (
        <header>
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
