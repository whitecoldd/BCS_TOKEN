import React, { useState, useEffect } from "react";
import "./exploreStacks.scss";
import { publicRequest } from "../../../requestMethods";
import explore_dot from "../../../assets/img/explore_dot.svg";
import explore_logo from "../../../assets/img/explore_logo.svg";
import explore_circles from "../../../assets/img/explore_circles.svg";

export default function ExploreStacks() {
  const [items, setitems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/api/metaBox/find");
        setitems(res.data);
      } catch {}
    };
    getItems();
  }, []);
  return (
    <div className="exploreStacks">
      <h3 className="exploreStacks_title">{items[0]?.header}</h3>
      <p className="subtitle">
        {items[0]?.text}
      </p>

      <div className="exploreStacks_items">
        <div className="exploreStacks_logo">
          <img src={explore_logo} alt="" />
        </div>

        <div className="exploreStacks_item">
          <h4>Maps</h4>
          <p>Each map has a frozen number of tokens.</p>
          <img src={explore_dot} alt="" />
        </div>
        <div className="exploreStacks_item">
          <h4>Characteristics</h4>
          <p>Improve the characteristics of your personage.</p>
          <img src={explore_dot} alt="" />
        </div>
        <div className="exploreStacks_item">
          <h4>Tools</h4>
          <p>Get new tools and increase your token production.</p>
          <img src={explore_dot} alt="" />
        </div>
      </div>

      <div className="simple_slider exploreStacks_mobile">
        <div className="exploreStacks_logo">
          <img src={explore_logo} alt="" />
        </div>

        <div className="galary_trackImages_wrapper">
          <div className="galary_trackImages">
            {/* В этом блоке содержится контент */}

            <div className="exploreStacks_item">
              <h4>{items[0]?.boxheader1}</h4>
              <p>{items[0]?.boxtext1}</p>
              <img src={explore_dot} alt="" />
            </div>
            <div className="exploreStacks_item">
              <h4>{items[0]?.boxheader2}</h4>
              <p>{items[0]?.boxtext2}</p>
              <img src={explore_dot} alt="" />
            </div>
            <div className="exploreStacks_item">
              <h4>{items[0]?.boxheader3}</h4>
              <p>{items[0]?.boxtext3}</p>
              <img src={explore_dot} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="exploreStacks_circles">
        <img src={items[0]?.icon} alt="" />
      </div>
    </div>
  );
}
