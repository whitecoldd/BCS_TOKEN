import "../../styles.css";
import { addContract } from "../../../../redux/apiCalls";
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
export default function NewContract() {
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
    addContract(product, dispatch);
    toast("Product added!");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Contract Codes</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Vesting Contract Address</label>
          <textarea
            name="vesting"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>BCS Contract Address</label>
          <textarea
            name="bcs"
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
