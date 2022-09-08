import React from 'react'
import "./statistics.scss"

import graphics1 from "../../../assets/img/graphics1.png"
import graphics2 from "../../../assets/img/graphics2.png"
import statistics_logo from "../../../assets/img/statistics_logo.png"

export default function Statistics() {
    return (
        <div className="statistics" id="stats_id">
            <div className="statistics_w">
                <div className="statistics_row">
                    <div className="statistics_graphics">
                        <img src={graphics1} alt="" />
                    </div>
                    <div className="statistics_text">
                        <h4 className="statistics_text_title">STATISTICS</h4>
                        <p className="statistics_text_p">The statistics of this coin is collected online based on the analysis of the Bikas
                            crypto-casino database and displays
                            the real state of the BCS.</p>
                    </div>
                </div>
                <div className="statistics_row">
                    <div className="statistics_graphics">
                        <img src={graphics2} alt="" />
                    </div>
                    <div className="statistics_logo">
                        <img src={statistics_logo} alt="" />
                    </div>
                </div>
            </div>

            <div className="simple_slider statistics_mobile">

                <div className="galary_trackImages_wrapper">
                    <div className="galary_trackImages">
                        {/* В этом блоке содержится контент */}

                        <div className="statistics_graphics">
                            <img src={graphics1} alt="" />
                        </div>
                        <div className="statistics_graphics">
                            <img src={graphics2} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}