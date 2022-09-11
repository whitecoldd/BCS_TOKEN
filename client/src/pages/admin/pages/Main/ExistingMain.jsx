import { Link, useLocation } from "react-router-dom";
import "../../styles1.css";
import PublishIcon from "@mui/icons-material/Publish";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateMain, getMain } from "../../../../redux/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import app from "../../../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
export default function MyMain() {
  const dispatch = useDispatch();
  useEffect(() => {
    getMain(dispatch);
  }, [dispatch]);

  //getHeader(dispatch);
  const productId = useSelector((state) => state.main.mains[0]._id);

  const product = useSelector((state) => state.main.mains[0]);
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
          console.log({ ...inputs, bg: downloadURL });
          const product = { ...inputs, bg: downloadURL };
          updateMain(productId, product, dispatch);
          toast("Product updated!");
        });
      }
    );
  };

  return (
    <div className="product">
      <div className="productTopRight">
        <div className="productInfoTop">
          <img src={product.bg} alt="" className="productInfoImg" />
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
            <span className="productInfoKey">text</span>
            <span className="productInfoValue">{product.text}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">button 1</span>
            <span className="productInfoValue">{product.btn1}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">button 2</span>
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
            <label>Background</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
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
            <label>Text</label>
            <input
              name="text"
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
