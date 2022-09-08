import { Link, useLocation } from "react-router-dom";
import "../../styles1.css";
import PublishIcon from "@mui/icons-material/Publish";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateHeader, getHeader } from "../../../../redux/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import app from "../../../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    getHeader(dispatch);
  }, [])
  
  //getHeader(dispatch);
  const productId = useSelector((state) => state.header.headers[0]._id);

  const product = useSelector((state) => state.header.headers[0]);
  if (typeof window !== "undefined") {
    injectStyle();
  }
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log({ ...inputs, headerIcon: downloadURL });
          const product = { ...inputs, headerIcon: downloadURL };
          updateHeader(productId, product, dispatch);
          toast("Product updated!");
        });
      }
    );
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
            <span className="productInfoKey">header tag 1</span>
            <span className="productInfoValue">{product.header1}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">header tag 2</span>
            <span className="productInfoValue">{product.header2}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">header tag 3</span>
            <span className="productInfoValue">{product.header3}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">header tag 4</span>
            <span className="productInfoValue">{product.header4}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">header tag 5</span>
            <span className="productInfoValue">{product.header5}</span>
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
          <h1 className="productTitle">Header</h1>
        </div>
        <form className="productForm">
          <div className="addProductItem">
            <label>Header Icon</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Header Tab 1</label>
            <input
              name="header1"
              type="text"
              placeholder="text"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Header Tab 2</label>
            <input
              name="header2"
              type="text"
              placeholder="text"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Header Tab 3</label>
            <input
              name="header3"
              type="text"
              placeholder="text"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Header Tab 4</label>
            <input
              name="header4"
              type="text"
              placeholder="text"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Header Tab 5</label>
            <input
              name="header5"
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
