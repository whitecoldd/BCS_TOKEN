import React, { useState } from 'react'
import "./NFT.scss"

import nft_bcs_price from "../../../assets/img/nft_bcs_price.svg"
import bg from "../../../assets/img/nftCard_descBg.png"


export default function NFT() {

    let [nftPicks, setnftPicks] = useState([
        {
            id: 1,
            title: 'Gray Pickaxe #17',
            img: 'pick.png',
            tool: 1800,
        },
        {
            id: 2,
            title: 'Gray Pickaxe #17',
            img: 'pick.png',
            tool: 1800,
        },
        {
            id: 3,
            title: 'Gray Pickaxe #17',
            img: 'pick.png',
            tool: 1800,
        },
    ])

    return (
        <div className="NFT">
            <div className="NFT_left">
                <div className="NFT_left_header">
                    <h3 className="NFT_left_header_title"><b>
                        <svg viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.8707 0C23.3811 0 19.7417 3.63942 19.7417 8.12904C19.7417 12.6187 23.3811 16.2581 27.8707 16.2581C32.3604 16.2581 35.9998 12.6187 35.9998 8.12904C35.9998 3.63942 32.3604 0 27.8707 0ZM31.3546 9.87098L27.8707 12.1936L24.3869 9.87098V6.3871L27.8707 4.06452L31.3546 6.3871V9.87098Z" fill="#EB266F" />
                            <path d="M8.12904 16.2581C12.6187 16.2581 16.2581 12.6187 16.2581 8.12904C16.2581 3.63942 12.6187 0 8.12904 0C3.63942 0 0 3.63942 0 8.12904C0 12.6187 3.63942 16.2581 8.12904 16.2581ZM8.12904 3.48387L12.7742 8.12904L8.12904 12.7742L3.48387 8.12904L8.12904 3.48387Z" fill="#EB266F" />
                            <path d="M9.87109 25.547C9.87109 30.0366 13.5105 33.676 18.0001 33.676C22.4897 33.676 26.1292 30.0366 26.1292 25.547C26.1292 21.0574 22.4897 17.418 18.0001 17.418C13.5105 17.418 9.87109 21.0574 9.87109 25.547ZM18.0001 20.9018L22.0647 27.8696H13.9356L18.0001 20.9018Z" fill="#EB266F" />
                        </svg>
                    </b>NFT
                    </h3>
                    <p>The main task of NFTs on the platform is that they will give users who have them certain advantages, depending on the subject and purpose of this NFT.</p>
                </div>
                <div className="NFT_left_content">
                    {nftPicks.map((nftPick) => {
                        return (
                            <div key={nftPick.id} className="NFT_card">
                                <div className="NFT_card_img">
                                    <img src={'./assets/img/' + nftPick.img} alt="" />
                                </div>
                                <div className="NFT_card_desc">
                                    <div className="NFT_card_bg">
                                        <img src={bg} alt="" />
                                    </div>
                                    <div className="NFT_card_row">
                                        <span className="left">Tool</span>
                                        <div className="right">
                                            <div className="right_bcs">
                                                <img src={nft_bcs_price} alt="" />
                                            </div>
                                            <span>{nftPick.tool}</span>
                                        </div>
                                    </div>
                                    <p className="name">{nftPick.title}</p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
            <div className="NFT_right">
                <h3 className="NFT_left_header_title">How to get <span> NFT </span> ?</h3>

                <ul className="NFT_right_list">
                    <li>
                        <div>
                            <svg viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10L7.5 1L14 10L7.5 19L1 10Z" fill="#EB266F" stroke="white" />
                            </svg>
                        </div>
                        <span>participate in tournaments</span>
                    </li>
                    <li>
                        <div>
                            <svg viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10L7.5 1L14 10L7.5 19L1 10Z" fill="#EB266F" stroke="white" />
                            </svg>
                        </div>
                        <span>Complete tasks</span>
                    </li>
                    <li>
                        <div>
                            <svg viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10L7.5 1L14 10L7.5 19L1 10Z" fill="#EB266F" stroke="white" />
                            </svg>
                        </div>
                        <span>Achieve results</span>
                    </li>
                    <li>
                        <div>
                            <svg viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10L7.5 1L14 10L7.5 19L1 10Z" fill="#EB266F" stroke="white" />
                            </svg>
                        </div>
                        <span>Buy on the internal marketplace</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}