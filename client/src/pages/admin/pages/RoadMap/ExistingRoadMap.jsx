import { Link, useLocation } from "react-router-dom";
import "../../styles1.css";
import PublishIcon from "@mui/icons-material/Publish";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateRoadMap, getRoadMap } from "../../../../redux/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import app from "../../../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
export default function RoadMap() {
  const dispatch = useDispatch();
  useEffect(() => {
    getRoadMap(dispatch);
  }, [dispatch]);

  //getHeader(dispatch);
  const productId = useSelector((state) => state.roadMap.roadMaps[0]._id);

  const product = useSelector((state) => state.roadMap.roadMaps[0]);
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
    updateRoadMap(productId, product, dispatch);
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
            <span className="productInfoKey">step 1</span>
            <span className="productInfoValue">{product.text1}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">step 2</span>
            <span className="productInfoValue">{product.text2}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">step 3</span>
            <span className="productInfoValue">{product.text3}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">step 4</span>
            <span className="productInfoValue">{product.text4}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">step 5</span>
            <span className="productInfoValue">{product.text5}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">step 6</span>
            <span className="productInfoValue">{product.text6}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">step 7</span>
            <span className="productInfoValue">{product.text7}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">step 8</span>
            <span className="productInfoValue">{product.text8}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">step 9</span>
            <span className="productInfoValue">{product.text9}</span>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <div className="productTitleContainer">
          <h1 className="productTitle">Road Map</h1>
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
          <label>Step 1</label>
          <textarea
            name="text1"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Step 2</label>
          <textarea
            name="text2"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Step 3</label>
          <textarea
            name="text3"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Step 4</label>
          <textarea
            name="text4"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Step 5</label>
          <textarea
            name="text5"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Step 6</label>
          <textarea
            name="text6"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Step 7</label>
          <textarea
            name="text7"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Step 8</label>
          <textarea
            name="text8"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Step 9</label>
          <textarea
            name="text9"
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
