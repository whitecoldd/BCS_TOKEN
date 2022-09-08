import React, { useState, useEffect } from "react";
import "./header.scss";
import Logo from "../../assets/img/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { publicRequest, userRequest } from "../../requestMethods";
export default function Header({ admin }) {
  let [openNav, setopenNav] = useState(false);
  const [items, setitems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/api/header/find");
        setitems(res.data);
      } catch {}
    };
    getItems();
  }, []);

  return (
    <header className="header">
      <div className="header_logo">
        <Link to={"/"}>
          <img src={items[0]?.headerIcon} alt="" />
        </Link>
      </div>

      <nav className={openNav ? "nav show" : "nav"}>
        <ul>
          <li>
            <AnchorLink href={"#about_id"} onClick={() => setopenNav(false)}>
              {items[0]?.header1}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href={"#stats_id"} onClick={() => setopenNav(false)}>
              {items[0]?.header2}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href={"#playAndEarn_id"}
              onClick={() => setopenNav(false)}
            >
              {items[0]?.header3}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href={"#stacking_id"} onClick={() => setopenNav(false)}>
              {items[0]?.header4}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href={"#roadMap_id"} onClick={() => setopenNav(false)}>
              {items[0]?.header5}
            </AnchorLink>
          </li>

          {/* <?php
                    if (isset($_SESSION['adminname'])) {
                        echo '<li><a href="admin.php">Admin</a></li>';
                    echo '<li><a href="incs/logout.inc.php">Log Out</a></li>';
                    }
                    ?> */}
        </ul>
      </nav>

      <div className="header_btns">
        <button className="bicas">
          <a href="#">
            <span>{items[0]?.btn1}</span>
          </a>
        </button>
        <button className="white_paper">
          <a target="_blank" href="./assets/documentation/BCS Token WP.pdf">
            <span>{items[0]?.btn2}</span>
          </a>
        </button>
      </div>

      <div
        className={openNav ? "header_burger displayNone" : "header_burger"}
        onClick={() => setopenNav(true)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        className={
          openNav ? "header_burger close" : "header_burger close displayNone"
        }
        onClick={() => setopenNav(false)}
      >
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="0.798828"
            y1="10.4926"
            x2="10.4917"
            y2="0.799707"
            stroke="#fff"
            strokeLinecap="round"
          />
          <line
            x1="1.50593"
            y1="0.799805"
            x2="11.1988"
            y2="10.4927"
            stroke="#fff"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* <div className="hamburger hamburger--collapse">
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </div> */}
      {admin && (
        <>
          <div>
            <Link to={"/admin"} className="admin">
              <SupervisorAccountIcon />
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
