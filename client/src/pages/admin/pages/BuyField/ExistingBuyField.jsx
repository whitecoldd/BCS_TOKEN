import { Link, useLocation } from "react-router-dom";
import "../../styles1.css";
import PublishIcon from "@mui/icons-material/Publish";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateBuyField, getBuyField } from "../../../../redux/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import app from "../../../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
export default function BuyField() {
  const dispatch = useDispatch();
  useEffect(() => {
    getBuyField(dispatch);
  }, [dispatch]);

  //getHeader(dispatch);
  const productId = useSelector((state) => state.buyField.buyFields[0]._id);

  const product = useSelector((state) => state.buyField.buyFields[0]);
  if (typeof window !== "undefined") {
    injectStyle();
  }
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleArr = (e) => {
    setArr(e.target.value.split("..."));
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log({ ...inputs });
    const product = { ...inputs };
    updateBuyField(productId, product, dispatch);
    toast("Product updated!");
  };

  return (
    <div className="product">
      <div className="productTopRight">
        <div className="productInfoTop">
          <img src={product.headerIcon} alt="" className="productInfoImg" />
        </div>
        <div className="productInfoBottom">
          <div className="productInfoItem">
            <span className="productInfoKey">id:</span>
            <span className="productInfoValue">{product._id}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">header</span>
            <span className="productInfoValue">{product.header}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">first button</span>
            <span className="productInfoValue">{product.btn1}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">second button</span>
            <span className="productInfoValue">{product.btn2}</span>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <div className="productTitleContainer">
          <h1 className="productTitle">Article</h1>
        </div>
        <form className="productForm">
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
          <div className="productFormRight">
            <button onClick={handleClick} className="productButton">
              Update
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}
