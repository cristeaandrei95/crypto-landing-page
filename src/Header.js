import React, { Component, useState } from 'react'; 
import Logo from './assets/logo.png';
import Download from './assets/download.png';
import Modal from './components/Modal.js';

const modalRoot = document.getElementById('modals');

function Drawer() {
    const [ drawer, toggleDrawer ] = useState(false);

    return (
        <div className="drawer__wrapper">
            <div className={`drawer__hamburger${drawer ? '-hidden' : ''}`} onClick={() => toggleDrawer(!drawer)}></div>
            <Modal>
                <div className={`drawer__modal${!drawer ? '-hidden' : ''}`} >
                    <div className="drawer__close" onClick={() => toggleDrawer(!drawer)}>&times;</div>
                    <ul>
                        {['news', 'roadmap', 'raising money', 'team', 'ico payment', 'faq'].map(route => (
                            <li>
                                <a href="#" onClick={() => toggleDrawer(!drawer)}>{route}</a>
                            </li>
                        ))} 
                    </ul>
                </div>
            </Modal>
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
                {['news', 'roadmap', 'raising money', 'team', 'ico payment', 'faq'].map(route => <a href="#" >{route}</a> )} 
                <a href="#" className="whitepaper">
                    <img src={Download} alt="download file ico"/>
                    whitepaper
                </a>
            </nav>
        </header>
    )
  }
}
