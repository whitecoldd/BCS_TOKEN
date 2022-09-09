import React, { useState, useEffect } from "react";
import "./statistics.scss";
import { publicRequest } from "../../../requestMethods";
import graphics1 from "../../../assets/img/graphics1.png";
import graphics2 from "../../../assets/img/graphics2.png";
import statistics_logo from "../../../assets/img/statistics_logo.png";

export default function Statistics() {
  const [items, setitems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/api/statistics/find");
        setitems(res.data);
      } catch {}
    };
    getItems();
  }, []);
  return (
    <div className="statistics" id="stats_id">
      <div className="statistics_w">
        <div className="statistics_row">
          <div className="statistics_graphics">
            <img src={items[0]?.img} alt="" />
          </div>
          <div className="statistics_text">
            <h4 className="statistics_text_title">{items[0]?.header}</h4>
            <p className="statistics_text_p">
              {items[0]?.text}
            </p>
          </div>
        </div>
        <div className="statistics_row">
          <div className="statistics_graphics">
            <img src={graphics2} alt="" />
          </div>
          <div className="statistics_logo">
            <img src={statistics_logo} alt="" />
          </div>
        </div>
      </div>

      <div className="simple_slider statistics_mobile">
        <div className="galary_trackImages_wrapper">
          <div className="galary_trackImages">
            {/* В этом блоке содержится контент */}

            <div className="statistics_graphics">
              <img src={graphics1} alt="" />
            </div>
            <div className="statistics_graphics">
              <img src={graphics2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
