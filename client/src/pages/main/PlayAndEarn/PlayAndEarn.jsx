import React from 'react'
import "./PlayAndEarn.scss"

import Logoforlines from "../../../assets/img/Logoforlines.png"
import line1 from "../../../assets/img/line1.png"
import line2 from "../../../assets/img/line2.png"
import line3 from "../../../assets/img/line3.png"

export default function PlayAndEarn() {
    return (
        <div className="PlayAndEarn" id="playAndEarn_id">
            <h3 className="PlayAndEarn_title"><b>
                <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.1462 28.7526C25.5187 28.123 24.4734 28.123 24.0557 28.7526L15.6881 38.1959C15.2703 38.8254 15.2703 39.6654 15.6881 40.0845L24.0557 49.5278C24.6832 50.1574 25.7284 50.1574 26.1462 49.5278L34.9315 40.0845C35.3511 39.455 35.3511 38.615 34.9315 38.1959L26.1462 28.7526ZM20.7083 0C17.3609 0 14.8508 2.93731 14.8508 6.29553C14.8508 10.7024 18.8257 13.4311 24.2636 18.0466C24.8912 18.4675 25.7284 18.4675 26.1462 18.0466C31.3762 13.4311 35.3511 10.7024 35.3511 6.29553C35.3511 2.72866 32.841 0 29.4936 0C27.8208 0 26.1462 0.840004 25.1009 2.30776C23.8459 0.840004 22.3811 0 20.7083 0ZM14.6428 30.0081C15.4123 30.0093 16.1744 29.8581 16.8855 29.5632C17.5966 29.2682 18.2427 28.8354 18.7867 28.2895C19.3307 27.7435 19.7619 27.0952 20.0557 26.3817C20.3494 25.6683 20.4999 24.9036 20.4985 24.1317C20.4985 21.403 18.6159 19.0952 16.1058 18.4657C16.3156 15.1075 13.5957 12.3806 10.2501 12.3806C6.90276 12.3806 4.1829 15.1075 4.39267 18.4657C1.88258 18.8866 9.92533e-06 21.1944 9.92533e-06 23.923C-0.00140816 24.695 0.149145 25.4597 0.443031 26.1732C0.736916 26.8867 1.16835 27.535 1.71257 28.0808C2.2568 28.6266 2.9031 29.0593 3.61439 29.3539C4.32568 29.6485 5.08796 29.7993 5.85749 29.7976C6.90276 29.7976 7.94804 29.589 8.78533 28.9594V32.7368H7.32051C7.12711 32.7321 6.93477 32.7668 6.75516 32.8389C6.57555 32.911 6.4124 33.019 6.2756 33.1562C6.13881 33.2935 6.03121 33.4571 5.95934 33.6373C5.88747 33.8175 5.85282 34.0105 5.85749 34.2045C5.85749 35.0445 6.48501 35.6741 7.32051 35.6741H13.178C14.0153 35.6741 14.6428 35.0445 14.6428 34.2045C14.6475 34.0103 14.6128 33.8172 14.5408 33.6369C14.4688 33.4566 14.3611 33.2928 14.2241 33.1556C14.0871 33.0183 13.9237 32.9104 13.7439 32.8384C13.5641 32.7664 13.3715 32.7318 13.178 32.7368H11.7132V28.9594C12.5505 29.589 13.5957 30.0081 14.6428 30.0081ZM40.789 12.1684C40.1615 11.7493 39.3242 11.7493 38.9064 12.1684C33.6765 16.7857 29.4936 19.5125 29.4936 23.9194C29.4936 27.4863 32.0037 30.2149 35.3511 30.2149C36.3963 30.2149 37.4416 30.0063 38.2789 29.3767V32.7332H36.8141C36.6205 32.7285 36.428 32.7633 36.2483 32.8355C36.0686 32.9077 35.9053 33.0158 35.7685 33.1532C35.6317 33.2907 35.5241 33.4546 35.4524 33.635C35.3806 33.8154 35.3461 34.0085 35.3511 34.2027C35.3511 35.0409 35.9786 35.6705 36.8141 35.6705H42.6716C43.5089 35.6705 44.1364 35.0409 44.1364 34.2027C44.1413 34.0084 44.1068 33.8151 44.0349 33.6345C43.963 33.454 43.8553 33.29 43.7183 33.1526C43.5813 33.0151 43.4179 32.9071 43.2379 32.835C43.058 32.7629 42.8653 32.7282 42.6716 32.7332H41.2067V29.3749C42.044 30.0045 43.0893 30.2149 44.1364 30.2149C47.482 30.2149 49.9921 27.2776 49.9921 23.9194C50.2018 19.5125 46.2269 16.7857 40.789 12.1684Z" fill="white" />
                </svg>
                </b>Play and <span>earn</span>
            </h3>

            <div className="PlayAndEarn_textImg">
                <div className="PlayAndEarn_text">
                    <ul>
                        <li>play exciting games in a fair environment guaranteed by the MIXEDTECH blockchain platform</li>
                        <li>get a tokenized cashback for every bet</li>
                        <li>multiply your received TFS with the Hold To Earn program or keep playing your favorite games</li>
                    </ul>
                </div>

                <div className="PlayAndEarn_scheme_w">
                    <img className="img_logo" src={Logoforlines} alt="" />

                    <img className="img_line1_1" src={line1} alt="" />
                    <span className="img_line1_1_text">TOURNAMENTS</span>

                    <img className="img_line1_2" src={line1} alt="" />
                    <span className="img_line1_2_text">ROULETTE</span>

                    <img className="img_line2_1" src={line2} alt="" />
                    <span className="img_line2_1_text">CARD GAMES</span>

                    <img className="img_line2_2" src={line2} alt="" />
                    <span className="img_line2_2_text">LIVE CASINO</span>

                    <img className="img_line3_1" src={line3} alt="" />
                    <span className="img_line3_1_text">SLOTS</span>

                    <img className="img_line3_2" src={line3} alt="" />
                    <span className="img_line3_2_text">JACKPOTS</span>
                </div>
            </div>
        </div>
    )
}