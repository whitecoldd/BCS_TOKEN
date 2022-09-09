import React, { useState, useEffect } from "react";
import "./topBanner.scss";
import { publicRequest } from "../../../requestMethods";
import topBanner_phone from "../../../assets/img/topBanner_phone.png";
import { Link } from "react-router-dom";

export default function TopBanner() {
  const [items, setitems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/api/main/find");
        setitems(res.data);
      } catch {}
    };
    getItems();
  }, []);
  return (
    <div className="topBanner" id="about_id">
      <h1>{items[0]?.header}</h1>
      <p>{items[0]?.text}</p>
      <div className="topBanner_btns">
        <button className="bicas">
          <Link to={"/sale"}>
            <span>{items[0]?.btn1}</span>
          </Link>
        </button>
        <button className="white_paper">
          <a target="_blank" href="./assets/documentation/BCS Token WP.pdf">
            <span>{items[0]?.btn2}</span>
          </a>
        </button>
      </div>

      <div className="topBanner_bgimg">
        <img src={items[0]?.bg} alt="" />
      </div>
    </div>
  );
}
