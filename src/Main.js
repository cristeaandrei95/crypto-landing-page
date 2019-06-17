import React, { Component } from 'react';
import Counter from './components/Counter.js';

export default class Main extends Component {
    render() {
        return (
            <section id="main">
                <div className="col-left">
                    <span>introduction</span>
                    <h1>The Token sale is live!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sem nibh, eleifend nec dapibus sed, fringilla ut nunc. Sed scelerisque maximus vehicula. Sed nec dolor luctus, pulvinar ligula in, imperdiet nisl.</p>
                    <div className="cta-howItWorks"><a href="#"><div></div><span>See how it works</span></a></div>
                </div>
                <div className="col-right">
                    <div className="wrapper">
                        <h2>Token sale ends in:</h2>
                        <Counter />
                        <h3>Token sale ends september 12, 2018</h3>
                        <div className="progressBar__wrapper">
                            <div className="tooltip">Funded: 68% = $38 000 000</div>
                            <div className="progressBar">
                                <div className="progress">
                                    <div className="progress__inner"></div>
                                </div>
                            </div>
                        </div>
                        <div className="infobox">
                            <p>Soft cap: <span>200 000 USD</span></p>
                            <p>Min. transaction ammount: <span>200 000 USD</span></p>
                            <p>Target: <span>56 000 000 USD</span></p>
                        </div>
                        <button className="join">Join token sale</button>
                    </div>
                    <h3 className="bonus">Bonus 15% Ends in: 1d 14h 34m 12s</h3>
                </div>
            </section>
        )
    }
}
