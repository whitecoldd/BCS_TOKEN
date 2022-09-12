import "../../styles.css";
import { addSale } from "../../../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useState } from "react";
import app from "../../../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { TextareaAutosize } from "@mui/material";
export default function NewSale() {
  const [inputs, setInputs] = useState({});
  const [arr, setArr] = useState([]);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  if (typeof window !== "undefined") {
    injectStyle();
  }
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleArr = (e) => {
    setArr(e.target.value.split("..."));
  };
  const handleClick = (e) => {
    e.preventDefault()
    console.log({ ...inputs, instructions_list: arr });
    const product = { ...inputs, instructions_list: arr};
    addSale(product, dispatch);
    toast("Product added!");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Sale Info</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Header</label>
          <textarea
            name="header"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Timer Text</label>
          <textarea
            name="timer_text"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Contract Header 1</label>
          <textarea
            name="contract1"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Contract Header 2</label>
          <textarea
            name="contract2"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>User Tokens Row</label>
          <textarea
            name="tokens"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Claim User Tokens Row</label>
          <textarea
            name="claim"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Weekly Claim Info</label>
          <textarea
            name="weekly_claim"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Weekly Claim Response</label>
          <textarea
            name="weekly_claim_response"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Button Top</label>
          <textarea
            name="btn1"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Button Bottom</label>
          <textarea
            name="btn2"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Notification</label>
          <textarea
            name="note"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Instruction Header</label>
          <textarea
            name="instructions"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Instruction List</label>
          <textarea
            name="instructons_list"
            type="text"
            placeholder="text...text"
            onChange={handleArr}
          />
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
