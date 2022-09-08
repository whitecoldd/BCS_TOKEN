import React, { useState } from 'react'
import "./header2.scss"

import Logo from "../../assets/img/logo.svg"
import { Link, useNavigate } from 'react-router-dom'
import MuiModal from '../ui/mui_modal/MuiModal'
import MetamaskModal from '../metamaskModal/MetamaskModal'

export default function Header2({ setshowAlert }) {
    let navigate=useNavigate()
    let [showModal, setshowModal] = useState(false)

    return (
        <header className="header2">
            <Link to={'/'}>
                <div className="header_logo">
                    <img src={Logo} alt=""/>
                </div>
            </Link>
            {/* <button onClick={()=>navigate('../')} >back</button> */}

            <div className="header2_btns">
                <button className="white_paper" onClick={() => setshowModal(true)}><span>Connect Wallet</span></button>
            </div>

            <MuiModal
                content={<MetamaskModal setshowModal={setshowModal} setshowAlert={setshowAlert} />}
                show={showModal}
                setshowModal={setshowModal}
            />
        </header>
    )
}