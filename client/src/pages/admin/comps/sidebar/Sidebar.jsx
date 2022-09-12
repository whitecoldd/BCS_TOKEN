import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/apiCalls";
import { useNavigate } from "react-router-dom";
const Sidebar = ({pathname, url}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault()
    logout(dispatch);
    navigate('/')
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to={`header`} style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Header</span>
            </li>
          </Link>
          <Link to={`article`} style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Article</span>
            </li>
          </Link>
          <Link to={`main`} style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Main</span>
            </li>
          </Link>
          <Link to={`boxlist`} style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Boxes</span>
            </li>
          </Link>
          <Link to={`stats`} style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Statistcs</span>
            </li>
          </Link>
          <Link to={`plan`} style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Plan</span>
            </li>
          </Link>
          <Link to={`buy`} style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Buy Field</span>
            </li>
          </Link>
          <Link to={`meta`} style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Meta Miner</span>
            </li>
          </Link>
          <Link to={`road`} style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Road Map</span>
            </li>
          </Link>
          <Link to={`nft`} style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>NFT</span>
            </li>
          </Link>
          <Link to={`virtbox`} style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>VirtualBoxTop</span>
            </li>
          </Link>
          <Link to={`wii`} style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>VirtualBoxBottom</span>
            </li>
          </Link>
          <p className="title">Sale</p>
          <Link to={`contract`} style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Contract Addresses</span>
            </li>
          </Link>
          <Link to={`sale`} style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Sale Page Content</span>
            </li>
          </Link>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <Link to={"/"}>BCS</Link>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <button className="nobr-bttn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
