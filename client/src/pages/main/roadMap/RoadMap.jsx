import React, {useState, useEffect} from "react";
import "./roadMap.scss";
import { publicRequest } from "../../../requestMethods";
import roadMap_itemArrow from "../../../assets/img/roadMap_itemArrow.svg";
import calendar_icon from "../../../assets/img/calendar_icon.svg";

export default function RoadMap() {
  const [items, setitems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/api/roadMap/find");
        setitems(res.data);
      } catch {}
    };
    getItems();
  }, []);
  return (
    <div className="roadMap" id="roadMap_id">
      <h3 className="roadMap_title">{items[0]?.header}</h3>

      <div className="roadMap_road_w">
        <div className="roadMap_oneItem">
          <span>Q-1 | 2022</span>
          <div className="roadMap_oneItem_icon">
            <img src={calendar_icon} alt="" />
          </div>
          <div className="roadMap_text_block">
            <div className="roadMap_text_block_arrow">
              <img src={roadMap_itemArrow} alt="" />
            </div>
            <p>{items[0]?.text1}</p>
          </div>
        </div>
        <div className="roadMap_oneItem">
          <div className="roadMap_oneItem_icon">
            <div></div>
          </div>
          <div className="roadMap_text_block">
            <div className="roadMap_text_block_arrow">
              <img src={roadMap_itemArrow} alt="" />
            </div>
            <p>{items[0]?.text2}</p>
          </div>
        </div>
        <div className="roadMap_oneItem">
          <span>Q-2 | 2022</span>
          <div className="roadMap_oneItem_icon">
            <img src={calendar_icon} alt="" />
          </div>
          <div className="roadMap_text_block">
            <div className="roadMap_text_block_arrow">
              <img src={roadMap_itemArrow} alt="" />
            </div>
            <p>
            {items[0]?.text3}
            </p>
          </div>
        </div>
        <div className="roadMap_oneItem">
          <div className="roadMap_oneItem_icon">
            <div></div>
          </div>
          <div className="roadMap_text_block">
            <div className="roadMap_text_block_arrow">
              <img src={roadMap_itemArrow} alt="" />
            </div>
            <p>
            {items[0]?.text4}
            </p>
          </div>
        </div>
        <div className="roadMap_oneItem">
          <span>Q-3 | 2022</span>
          <div className="roadMap_oneItem_icon">
            <img src={calendar_icon} alt="" />
          </div>
          <div className="roadMap_text_block">
            <div className="roadMap_text_block_arrow">
              <img src={roadMap_itemArrow} alt="" />
            </div>
            <p>{items[0]?.text5}</p>
          </div>
        </div>
        <div className="roadMap_oneItem">
          <div className="roadMap_oneItem_icon">
            <div></div>
          </div>
          <div className="roadMap_text_block">
            <div className="roadMap_text_block_arrow">
              <img src={roadMap_itemArrow} alt="" />
            </div>
            <p>{items[0]?.text6}</p>
          </div>
        </div>
        <div className="roadMap_oneItem">
          <span>Q-4 | 2022</span>
          <div className="roadMap_oneItem_icon">
            <img src={calendar_icon} alt="" />
          </div>
          <div className="roadMap_text_block">
            <div className="roadMap_text_block_arrow">
              <img src={roadMap_itemArrow} alt="" />
            </div>
            <p>{items[0]?.text7}</p>
          </div>
        </div>
        <div className="roadMap_oneItem">
          <div className="roadMap_oneItem_icon">
            <div></div>
          </div>
          <div className="roadMap_text_block">
            <div className="roadMap_text_block_arrow">
              <img src={roadMap_itemArrow} alt="" />
            </div>
            <p>{items[0]?.text8}</p>
          </div>
        </div>
        <div className="roadMap_oneItem">
          <span>Q-5 | 2022</span>
          <div className="roadMap_oneItem_icon">
            <img src={calendar_icon} alt="" />
          </div>
          <div className="roadMap_text_block">
            <div className="roadMap_text_block_arrow">
              <img src={roadMap_itemArrow} alt="" />
            </div>
            <p>
            {items[0]?.text9}
            </p>
          </div>
        </div>

        <div className="roadMap_vertical_line">
          <div className="roadMap_circle_top"></div>
          <div className="roadMap_circle_bottom"></div>
        </div>
      </div>
    </div>
  );
}
