import "../../styles.css";
import { addBuyField } from "../../../../redux/apiCalls";
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
export default function NewBuyField() {
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
    const product = { ...inputs};
    addBuyField(product, dispatch);
    toast("Product added!");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Buy Field</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Header</label>
          <input
            name="header"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Button 1</label>
          <input
            name="btn1"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Button 2</label>
          <input
            name="btn2"
            type="text"
            placeholder="text"
            onChange={handleChange}
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
