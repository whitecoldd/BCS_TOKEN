import React, {useState, useEffect} from "react";
import "./Box.scss";
import { publicRequest } from "../../../requestMethods";
import redBox from "../../../assets/img/red-box.png";
import blueBox from "../../../assets/img/blue-box.png";

export default function Box() {
  const [items, setitems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/api/virtualBox/find");
        setitems(res.data);
      } catch {}
    };
    getItems();
  }, []);
  const [Box, setBox] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/api/wii/find");
        setBox(res.data);
      } catch {}
    };
    getItems();
  }, []);
  return (
    <div className="Box">
      <div className="box_wrapper">
        <div className="box_left">
          <img src={items[0]?.icon} alt="" />
        </div>
        <div className="box_center">
          <h3 className="NFT_left_header_title box_title">
            <b>
              <svg
                viewBox="0 0 33 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4999 1.8645C17.1362 1.85439 17.7499 2.10533 18.2032 2.56106C18.6566 3.01654 18.9118 3.63868 18.9118 4.28806C18.9118 4.93744 18.6566 5.55986 18.2032 6.01532C17.7498 6.47105 17.1362 6.72196 16.4999 6.71188C15.9917 6.70799 15.5764 7.1251 15.5723 7.64409V12.1944H17.4275L17.4277 8.47438C18.368 8.2688 19.2116 7.74178 19.8187 6.98065C20.426 6.21952 20.7605 5.26971 20.7671 4.28825C20.7437 2.74841 19.9254 1.33558 18.6147 0.572391C17.304 -0.190797 15.6957 -0.190797 14.3851 0.572391C13.0745 1.33558 12.2561 2.74841 12.2327 4.28825H14.0879C14.0937 3.64069 14.3507 3.02163 14.8029 2.56743C15.255 2.11299 15.8653 1.86025 16.4998 1.86437L16.4999 1.8645Z"
                  fill="#EB266F"
                />
                <path
                  d="M17.6379 14.5168C17.6379 15.1582 17.1284 15.6782 16.5 15.6782C15.8716 15.6782 15.3621 15.1582 15.3621 14.5168C15.3621 13.8755 15.8716 13.3555 16.5 13.3555C17.1284 13.3555 17.6379 13.8755 17.6379 14.5168Z"
                  fill="#EB266F"
                />
                <path
                  d="M28.4331 11.9932C29.1576 11.0918 30.1702 10.4802 31.2929 10.2664C30.4097 9.52699 29.8108 8.49343 29.601 7.34766C28.8765 8.24875 27.8638 8.8603 26.7412 9.07445C27.6244 9.81382 28.2233 10.8474 28.4331 11.9932Z"
                  fill="#EB266F"
                />
                <path
                  d="M6.31862 8.25643C5.21172 8.16933 4.1703 7.68637 3.37805 6.89258C3.29271 8.0223 2.81951 9.08492 2.04175 9.8935C3.14865 9.9806 4.18981 10.4638 4.98206 11.2574C5.0674 10.1278 5.54086 9.06501 6.31862 8.25643Z"
                  fill="#EB266F"
                />
                <path
                  d="M20.4212 15.6787C21.5462 13.3946 23.7029 11.8244 26.1853 11.4822L26.028 10.3323L26.0278 10.332C23.1762 10.7266 20.6984 12.5311 19.4058 15.1554L20.4212 15.6787Z"
                  fill="#EB266F"
                />
                <path
                  d="M12.5711 15.6808L13.6552 15.3269C13.1754 13.7881 12.2953 12.411 11.1084 11.343C9.92143 10.2752 8.47238 9.55634 6.91636 9.26367L6.7063 10.4053C8.06061 10.6594 9.32175 11.2844 10.355 12.2138C11.388 13.1429 12.1541 14.3413 12.5711 15.6808H12.5711Z"
                  fill="#EB266F"
                />
                <path
                  d="M13.0864 24.5293C13.0458 24.5293 13.0051 24.5249 12.9655 24.5161L2.84521 22.2706V32.6593L15.9098 35.9927L15.9271 21.459L13.5181 24.3272H13.5184C13.4102 24.4558 13.2524 24.5299 13.0863 24.5299L13.0864 24.5293Z"
                  fill="#EB266F"
                />
                <path
                  d="M30.1552 22.2668L20.0349 24.5123C19.9952 24.5211 19.9546 24.5255 19.914 24.5255C19.7479 24.5255 19.5901 24.4514 19.4819 24.3228L17.0654 21.4453L17.0479 35.9996L30.1553 32.6552L30.1552 22.2668Z"
                  fill="#EB266F"
                />
                <path
                  d="M16.5001 19.303L6.5898 17.5436L10.8102 16.7363V15.5547L3.30909 16.9901L3.32382 17.0715L0 20.4644L13.086 23.3678L16.5001 19.303Z"
                  fill="#EB266F"
                />
                <path
                  d="M33.0001 20.4643L29.6762 17.0715L29.691 16.9901L22.1898 15.5547V16.7363L26.4103 17.5436L16.5 19.303L19.9137 23.3678L33.0001 20.4643Z"
                  fill="#EB266F"
                />
              </svg>
            </b>
            {items[0]?.header}
          </h3>
          <p>
            {items[0]?.text}
          </p>
        </div>
        <div className="box_right">
          <img src={Box[0]?.icon} alt="" />
        </div>
      </div>
      <div className="inside_wrapper">
        <h3 className="box_inside_title">
        {Box[0]?.header} <span> {Box[0]?.headerp} </span> ?
        </h3>
        {/* &nbsp; */}

        <div className="list">
          <ul className="box_inside_list list_left">
            <li>
              <div>
                <svg
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10L7.5 1L14 10L7.5 19L1 10Z"
                    fill="#EB266F"
                    stroke="white"
                  />
                </svg>
              </div>
              <span>{Box[0]?.text1}</span>
            </li>
            <li>
              <div>
                <svg
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10L7.5 1L14 10L7.5 19L1 10Z"
                    fill="#EB266F"
                    stroke="white"
                  />
                </svg>
              </div>
              <span>{Box[0]?.text2}</span>
            </li>
            <li>
              <div>
                <svg
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10L7.5 1L14 10L7.5 19L1 10Z"
                    fill="#EB266F"
                    stroke="white"
                  />
                </svg>
              </div>
              <span>{Box[0]?.text3}</span>
            </li>
          </ul>
          <ul className="box_inside_list list_right">
            <li>
              <div>
                <svg
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10L7.5 1L14 10L7.5 19L1 10Z"
                    fill="#EB266F"
                    stroke="white"
                  />
                </svg>
              </div>
              <span>{Box[0]?.text4}</span>
            </li>
            <li>
              <div>
                <svg
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10L7.5 1L14 10L7.5 19L1 10Z"
                    fill="#EB266F"
                    stroke="white"
                  />
                </svg>
              </div>
              <span>{Box[0]?.text5}</span>
            </li>
            <li>
              <div>
                <svg
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10L7.5 1L14 10L7.5 19L1 10Z"
                    fill="#EB266F"
                    stroke="white"
                  />
                </svg>
              </div>
              <span>{Box[0]?.text6}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
