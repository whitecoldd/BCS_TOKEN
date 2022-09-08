import React from 'react'
import "./topBanner.scss"

import topBanner_phone from "../../../assets/img/topBanner_phone.png"
import { Link } from 'react-router-dom'

export default function TopBanner() {
    return (
        <div className="topBanner" id="about_id">
            <h1>Join the gambling revolution</h1>
            <p>BCS currently trading!</p>
            <div className="topBanner_btns">
                <button className="bicas"><Link to={'/sale'}><span>Buy Now</span></Link></button>
                <button className="white_paper"><a target="_blank" href="./assets/documentation/BCS Token WP.pdf"><span>Documentation</span></a></button>
            </div>

            <div className="topBanner_bgimg">
                <img src={topBanner_phone} alt="" />
            </div>
        </div>
    )
}