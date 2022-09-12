import React, { useState, useEffect } from "react";
import "./header2.scss";
import { publicRequest } from "../../requestMethods";
import Logo from "../../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import MuiModal from "../ui/mui_modal/MuiModal";
import MetamaskModal from "../metamaskModal/MetamaskModal";

export default function Header2({ setshowAlert }) {
  let navigate = useNavigate();
  let [showModal, setshowModal] = useState(false);
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
    <header className="header2">
      <Link to={"/"}>
        <div className="header_logo">
          <img src={Logo} alt="" />
        </div>
      </Link>
      {/* <button onClick={()=>navigate('../')} >back</button> */}

      <div className="header2_btns">
        <button className="white_paper" onClick={() => setshowModal(true)}>
          <span>{Box[0]?.btn1}</span>
        </button>
      </div>

      <MuiModal
        content={
          <MetamaskModal
            setshowModal={setshowModal}
            setshowAlert={setshowAlert}
          />
        }
        show={showModal}
        setshowModal={setshowModal}
      />
    </header>
  );
}
