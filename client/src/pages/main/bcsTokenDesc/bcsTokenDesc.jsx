import React, { useState, useEffect } from "react";
import "./bcsTokenDesc.scss";
import { publicRequest } from "../../../requestMethods";
import BcsTokenDescImg from "../../../assets/img/bcstoken_desc.png";
import bcstokenDesc_logo from "../../../assets/img/bcstokenDesc_logo.png";
import bicas_icon from "../../../assets/img/bicas_icon.svg";
import metaMiner_icon from "../../../assets/img/metaMiner_icon.svg";
import nft_icon from "../../../assets/img/nft_icon.svg";
import Box_icon from "../../../assets/img/Box_icon.svg";

export default function BcsTokenDesc() {
  const [items, setitems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/api/article/find");
        setitems(res.data);
      } catch {}
    };
    getItems();
  }, []);
  return (
    <div className="BCSTokenDesc" id="stacking_id">
      <div className="BCSTokenDesc_items">
        <div className="BCSTokenDesc_item">
          <div className="BCSTokenDesc_iconTitle">
            <div className="BCSTokenDesc_icon">
              <img src={nft_icon} alt="" />
            </div>
            <h4>NFT</h4>
          </div>
          <p>Participate in alternative token earnings by playing lotteries</p>
        </div>
        <div className="BCSTokenDesc_item">
          <div className="BCSTokenDesc_iconTitle">
            <div className="BCSTokenDesc_icon">
              <img src={metaMiner_icon} alt="" />
            </div>
            <h4>Meta - Miner</h4>
          </div>
          <p>Play on the exclusive BIСAS platform and earn tokens</p>
        </div>
        <div className="BCSTokenDesc_item">
          <div className="BCSTokenDesc_iconTitle">
            <div className="BCSTokenDesc_icon">
              <img src={Box_icon} alt="" />
            </div>
            <h4>Box</h4>
          </div>
          <p>Choose your holding period and start to earn tokens</p>
        </div>
        <div className="BCSTokenDesc_item">
          <div className="BCSTokenDesc_iconTitle">
            <div className="BCSTokenDesc_icon">
              <img src={bicas_icon} alt="" />
            </div>
            <h4>BICAS</h4>
          </div>
          <p>Choose your holding period and start to earn tokens</p>
        </div>
      </div>

      <div className="simple_slider BCSTokenDesc_mobile">
        <div className="galary_trackImages_wrapper">
          <div className="galary_trackImages">
            <div className="BCSTokenDesc_item">
              <div className="BCSTokenDesc_iconTitle">
                <div className="BCSTokenDesc_icon">
                  <img src={nft_icon} alt="" />
                </div>
                <h4>NFT</h4>
              </div>
              <p>
                Participate in alternative token earnings by playing lotteries
              </p>
            </div>
            <div className="BCSTokenDesc_item">
              <div className="BCSTokenDesc_iconTitle">
                <div className="BCSTokenDesc_icon">
                  <img src={metaMiner_icon} alt="" />
                </div>
                <h4>Meta - Miner</h4>
              </div>
              <p>Play on the exclusive BIСAS platform and earn tokens</p>
            </div>
            <div className="BCSTokenDesc_item">
              <div className="BCSTokenDesc_iconTitle">
                <div className="BCSTokenDesc_icon">
                  <img src={Box_icon} alt="" />
                </div>
                <h4>Box</h4>
              </div>
              <p>Choose your holding period and start to earn tokens</p>
            </div>
            <div className="BCSTokenDesc_item">
              <div className="BCSTokenDesc_iconTitle">
                <div className="BCSTokenDesc_icon">
                  <img src={bicas_icon} alt="" />
                </div>
                <h4>BICAS</h4>
              </div>
              <p>Choose your holding period and start to earn tokens</p>
            </div>
          </div>
        </div>

        {/* <button className="galary_left">В лево</button>
                        <button className="galary_right">В право</button> */}
      </div>

      <div className="BCSTokenDesc_w">
        <div className="BCSTokenDesc_bgimg">
          <img src={items[0]?.icon} alt="" />
          <img className="bcstokenDesc_logo" src={bcstokenDesc_logo} alt="" />
        </div>

        <div className="BCSTokenDesc_desc">
          <h3 className="BCSTokenDesc_title">{items[0]?.header}</h3>
          <div className="BCSTokenDesc_text">
            <ul>
                {items[0]?.text.map((text)=>(
                    <li>{text}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
