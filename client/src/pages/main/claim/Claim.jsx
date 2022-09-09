import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./claim.scss";
import { publicRequest } from "../../../requestMethods";
export default function Claim() {
  const [items, setitems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/api/buyField/find");
        setitems(res.data);
      } catch {}
    };
    getItems();
  }, []);
  return (
    <div className="claim">
      <div className="claim_blur"></div>
      <h3 className="claim_title">{items[0]?.header}</h3>

      <Link to={"/sale"} className="claim_btn1">
        {items[0]?.btn1}
      </Link>
      <Link to={"/sale"} className="claim_btn2">
        {items[0]?.btn2}
      </Link>
    </div>
  );
}
