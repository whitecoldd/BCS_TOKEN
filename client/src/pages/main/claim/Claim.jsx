import React from 'react'
import { Link } from 'react-router-dom'
import "./claim.scss"

export default function Claim() {
    return (
        <div className="claim">
            <div className="claim_blur"></div>
            <h3 className="claim_title">Claim your BCS and hold them</h3>

            <Link to={'/sale'} className="claim_btn1">BCS for Private Sale</Link>
            <Link to={'/sale'} className="claim_btn2">BCS for Public Sale</Link>
        </div>
    )
}
