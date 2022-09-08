import React from 'react'
import "./sale.scss"
import Header2 from '../../components/header2/Header2'

import bg from "../../assets/img/bg.png"
import Logo_input from "../../assets/img/Logo_input.svg"
import Timer from '../../components/Timer/Timer'

export default function Sale({ setshowAlert }) {

    return (
        <>
            <Header2 setshowAlert={setshowAlert} />
            <main className="main">
                <div className="bg bg1"><img src={bg} alt=""/></div>
                <div className="bg bg2"><img src={bg} alt=""/></div>
                <div className="bg bg3"><img src={bg} alt=""/></div>
                <div className="bg bg4"><img src={bg} alt=""/></div>

                <div className="ClaimBcs">
                    <h1>Claim Your bcs</h1>
                    <Timer/>
                    <p className="ClaimBcs_sub_text">till the vesting end!</p>

                    <div className="ClaimBcs_payAddress">
                        <div className="ClaimBcs_payAddress_">
                            <p className="ClaimBcs_payAddress_title">Vesting contract address</p>
                            <p className="ClaimBcs_payAddress_code">0x9A49202f351D000D1AE291321BE9E4сb4858A165</p>
                        </div>
                        <div className="ClaimBcs_payAddress_">
                            <p className="ClaimBcs_payAddress_title">BCS contract address</p>
                            <p className="ClaimBcs_payAddress_code">0x7A19112f351D000D1AE291321BE9E4ab4858A235</p>
                        </div>
                    </div>
                </div>

                <div className="wallet_form">
                    <form action="#" method="post">
                        <div className="walletForm_input">
                            <span>Your Tokens in Contract:</span>
                            <input type="text" name="input1" defaultValue="0 BCS"/>
                            <div className="walletForm_input_img">
                                <img src={Logo_input} alt=""/>
                            </div>
                        </div>
                        <div className="walletForm_input">
                            <span>Avaible for Claim:</span>
                            <input type="text" name="input2" defaultValue="0 BCS"/>
                                <div className="walletForm_input_img">
                                    <img src={Logo_input} alt=""/>
                                </div>
                        </div>
                        <div className="wallet_form_underInputsText">
                            <span>Avaible for Claim Weekly :</span>
                            <p>0 BCS / WEEK</p>
                        </div>
                        <button disabled type="submit"><span>Wallet is not conntected</span></button>
                        <span className="walletForm_notify">*As soon as you claim, your tokens will be transferred to the connected wallet. Make sure you have added BCS token there</span>
                    </form>
                </div>

                <div className="instructions">
                    <h2>BCS Token Claim Instructions</h2>
                    <ol>
                        <li>Press connect MetaMask on the top of the ‘claim page’ The button will start to display your address as soon as it’s
                            connected.</li>
                        <li>Make sure you have a sufficient amount of ETH to cover the gas fee.</li>
                        <li>Find the ‘available for claim’ field in the 'claim form' and consider claiming.</li>
                    </ol>
                </div>
            </main>
        </>
    )
}