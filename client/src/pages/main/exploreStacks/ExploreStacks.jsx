import React from 'react'
import "./exploreStacks.scss"

import explore_dot from "../../../assets/img/explore_dot.svg"
import explore_logo from "../../../assets/img/explore_logo.svg"
import explore_circles from "../../../assets/img/explore_circles.svg"

export default function ExploreStacks() {
    return (
        <div className="exploreStacks">
            <h3 className="exploreStacks_title">Meta-mainer</h3>
            <p className="subtitle">Meta-Miner - internal gameplay, for actions and development in which the user will be rewarded with a certain number of tokens</p>

            <div className="exploreStacks_items">
                <div className="exploreStacks_logo">
                    <img src={explore_logo} alt="" />
                </div>

                <div className="exploreStacks_item">
                    <h4>Maps</h4>
                    <p>Each map has a frozen number of tokens.</p>
                    <img src={explore_dot} alt="" />
                </div>
                <div className="exploreStacks_item">
                    <h4>Characteristics</h4>
                    <p>Improve the characteristics of your personage.</p>
                    <img src={explore_dot} alt="" />
                </div>
                <div className="exploreStacks_item">
                    <h4>Tools</h4>
                    <p>Get new tools and increase your token production.</p>
                    <img src={explore_dot} alt="" />
                </div>
            </div>

            <div className="simple_slider exploreStacks_mobile">

                <div className="exploreStacks_logo">
                    <img src={explore_logo} alt="" />
                </div>

                <div className="galary_trackImages_wrapper">
                    <div className="galary_trackImages">
                        {/* В этом блоке содержится контент */}

                        <div className="exploreStacks_item">
                            <h4>Maps</h4>
                            <p>Each map has a frozen number of tokens.</p>
                            <img src={explore_dot} alt="" />
                        </div>
                        <div className="exploreStacks_item">
                            <h4>Characteristics</h4>
                            <p>Improve the characteristics of your personage.</p>
                            <img src={explore_dot} alt="" />
                        </div>
                        <div className="exploreStacks_item">
                            <h4>Tools</h4>
                            <p>Get new tools and increase your token production.</p>
                            <img src={explore_dot} alt="" />
                        </div>

                    </div>
                </div>

            </div>

            <div className="exploreStacks_circles">
                <img src={explore_circles} alt="" />
            </div>
        </div>
    )
}