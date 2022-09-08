import React from 'react'
import "./roadMap.scss"

import roadMap_itemArrow from "../../../assets/img/roadMap_itemArrow.svg"
import calendar_icon from "../../../assets/img/calendar_icon.svg"

export default function RoadMap() {
    return (
        <div className="roadMap" id="roadMap_id">
            <h3 className="roadMap_title">Road Map</h3>

            <div className="roadMap_road_w">
                <div className="roadMap_oneItem">
                    <span>Q-1 | 2022</span>
                    <div className="roadMap_oneItem_icon">
                        <img src={calendar_icon} alt="" />
                    </div>
                    <div className="roadMap_text_block">
                        <div className="roadMap_text_block_arrow">
                            <img src={roadMap_itemArrow} alt="" />
                        </div>
                        <p>Starting devepment.</p>
                    </div>
                </div>
                <div className="roadMap_oneItem">

                    <div className="roadMap_oneItem_icon">
                        <div></div>
                    </div>
                    <div className="roadMap_text_block">
                        <div className="roadMap_text_block_arrow">
                            <img src={roadMap_itemArrow} alt="" />
                        </div>
                        <p>Website and social media release.</p>
                    </div>
                </div>
                <div className="roadMap_oneItem">
                    <span>Q-2 | 2022</span>
                    <div className="roadMap_oneItem_icon">
                        <img src={calendar_icon} alt="" />
                    </div>
                    <div className="roadMap_text_block">
                        <div className="roadMap_text_block_arrow">
                            <img src={roadMap_itemArrow} alt="" />
                        </div>
                        <p>Airdrop & Marketing Start,
                            Cranch.io Presale Launch,
                            SmartContract Audit by Cerdik
                            & Techrate</p>
                    </div>
                </div>
                <div className="roadMap_oneItem">
                    <div className="roadMap_oneItem_icon">
                        <div></div>
                    </div>
                    <div className="roadMap_text_block">
                        <div className="roadMap_text_block_arrow">
                            <img src={roadMap_itemArrow} alt="" />
                        </div>
                        <p>PancakeSwap Listing, CoinMarketCap Listing, CoinGeko Listing, Partnership Announcments.</p>
                    </div>
                </div>
                <div className="roadMap_oneItem">
                    <span>Q-3 | 2022</span>
                    <div className="roadMap_oneItem_icon">
                        <img src={calendar_icon} alt="" />
                    </div>
                    <div className="roadMap_text_block">
                        <div className="roadMap_text_block_arrow">
                            <img src={roadMap_itemArrow} alt="" />
                        </div>
                        <p>Beginning of
                            develompent of mobile
                            app for iOS & Android</p>
                    </div>
                </div>
                <div className="roadMap_oneItem">
                    <div className="roadMap_oneItem_icon">
                        <div></div>
                    </div>
                    <div className="roadMap_text_block">
                        <div className="roadMap_text_block_arrow">
                            <img src={roadMap_itemArrow} alt="" />
                        </div>
                        <p>Marketplace for NFT’s (Gaming & Esports) + Stacking</p>
                    </div>
                </div>
                <div className="roadMap_oneItem">
                    <span>Q-4 | 2022</span>
                    <div className="roadMap_oneItem_icon">
                        <img src={calendar_icon} alt="" />
                    </div>
                    <div className="roadMap_text_block">
                        <div className="roadMap_text_block_arrow">
                            <img src={roadMap_itemArrow} alt="" />
                        </div>
                        <p>Launching
                            mobile app iOS
                            & Android</p>
                    </div>
                </div>
                <div className="roadMap_oneItem">
                    <div className="roadMap_oneItem_icon">
                        <div></div>
                    </div>
                    <div className="roadMap_text_block">
                        <div className="roadMap_text_block_arrow">
                            <img src={roadMap_itemArrow} alt="" />
                        </div>
                        <p>Marketing Push</p>
                    </div>
                </div>
                <div className="roadMap_oneItem">
                    <span>Q-5 | 2022</span>
                    <div className="roadMap_oneItem_icon">
                        <img src={calendar_icon} alt="" />
                    </div>
                    <div className="roadMap_text_block">
                        <div className="roadMap_text_block_arrow">
                            <img src={roadMap_itemArrow} alt="" />
                        </div>
                        <p>Additional partnership &
                            collaborations, Further
                            Ecosystem Development</p>
                    </div>
                </div>

                <div className="roadMap_vertical_line">
                    <div className="roadMap_circle_top"></div>
                    <div className="roadMap_circle_bottom"></div>
                </div>
            </div>
        </div>
    )
}