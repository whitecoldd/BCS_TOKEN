import { Link, useLocation } from "react-router-dom";
import "../../styles1.css";
import PublishIcon from "@mui/icons-material/Publish";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateSale, getSale } from "../../../../redux/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import app from "../../../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
export default function MySale() {
  const dispatch = useDispatch();
  useEffect(() => {
    getSale(dispatch);
  }, [dispatch]);

  //getHeader(dispatch);
  const productId = useSelector((state) => state.sale.sales[0]._id);

  const product = useSelector((state) => state.sale.sales[0]);
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
    console.log({ ...inputs, instructions_list: arr });
    const product = { ...inputs, instructions_list: arr };
    updateSale(productId, product, dispatch);
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
            <span className="productInfoKey">timer text</span>
            <span className="productInfoValue">{product.timer_text}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">contract header 1</span>
            <span className="productInfoValue">{product.contract1}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">contract header 2</span>
            <span className="productInfoValue">{product.contract2}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">user tokens</span>
            <span className="productInfoValue">{product.tokens}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">claim user tokens</span>
            <span className="productInfoValue">{product.claim}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">button 1</span>
            <span className="productInfoValue">{product.btn1}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">button 2</span>
            <span className="productInfoValue">{product.btn2}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">weekly claim </span>
            <span className="productInfoValue">{product.weekly_claim}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">weekly claim response</span>
            <span className="productInfoValue">{product.weekly_claim_response}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">notification</span>
            <span className="productInfoValue">{product.note}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">instructions header </span>
            <span className="productInfoValue">{product.instructions}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">instructions list</span>
            <span className="productInfoValue">{product.instructions_list}</span>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <div className="productTitleContainer">
          <h1 className="productTitle">Sale Page Content</h1>
        </div>
        <form className="productForm">
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
