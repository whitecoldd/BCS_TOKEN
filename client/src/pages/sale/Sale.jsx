import React, { useState, useEffect } from "react";
import "./sale.scss";
import Header2 from "../../components/header2/Header2";
import { publicRequest } from "../../requestMethods";
import bg from "../../assets/img/bg.png";
import Logo_input from "../../assets/img/Logo_input.svg";
import Timer from "../../components/Timer/Timer";

export default function Sale({ setshowAlert }) {
  const [items, setitems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/api/contract/find");
        setitems(res.data);
      } catch {}
    };
    getItems();
  }, []);
  const [Box, setBox] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/api/sale/find");
        setBox(res.data);
      } catch {}
    };
    getItems();
  }, []);
  return (
    <>
      <Header2 setshowAlert={setshowAlert} />
      <main className="main">
        <div className="bg bg1">
          <img src={bg} alt="" />
        </div>
        <div className="bg bg2">
          <img src={bg} alt="" />
        </div>
        <div className="bg bg3">
          <img src={bg} alt="" />
        </div>
        <div className="bg bg4">
          <img src={bg} alt="" />
        </div>

        <div className="ClaimBcs">
          <h1>{Box[0]?.header}</h1>
          <Timer />
          <p className="ClaimBcs_sub_text">{Box[0]?.timer_text}</p>

          <div className="ClaimBcs_payAddress">
            <div className="ClaimBcs_payAddress_">
              <p className="ClaimBcs_payAddress_title">{Box[0]?.contract1}</p>
              <p className="ClaimBcs_payAddress_code">{items[0]?.vesting}</p>
            </div>
            <div className="ClaimBcs_payAddress_">
              <p className="ClaimBcs_payAddress_title">{Box[0]?.contract2}</p>
              <p className="ClaimBcs_payAddress_code">{items[0]?.bcs}</p>
            </div>
          </div>
        </div>

        <div className="wallet_form">
          <form action="#" method="post">
            <div className="walletForm_input">
              <span>{Box[0]?.tokens}</span>
              <input type="text" name="input1" defaultValue="0 BCS" />
              <div className="walletForm_input_img">
                <img src={Logo_input} alt="" />
              </div>
            </div>
            <div className="walletForm_input">
              <span>{Box[0]?.claim}</span>
              <input type="text" name="input2" defaultValue="0 BCS" />
              <div className="walletForm_input_img">
                <img src={Logo_input} alt="" />
              </div>
            </div>
            <div className="wallet_form_underInputsText">
              <span>{Box[0]?.weekly_claim}</span>
              <p>0 {Box[0]?.weekly_claim_response}</p>
            </div>
            <button disabled type="submit">
              <span>{Box[0]?.btn2}</span>
            </button>
            <span className="walletForm_notify">{Box[0]?.note}</span>
          </form>
        </div>

        <div className="instructions">
          <h2>{Box[0]?.instructions}</h2>
          <ol>
            {Box[0]?.instructions_list.map((list) => (
              <li>
                {list}
              </li>
            ))}
          </ol>
        </div>
      </main>
    </>
  );
}
