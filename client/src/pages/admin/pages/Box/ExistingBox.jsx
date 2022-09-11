import { Link, useLocation } from "react-router-dom";
import "../../styles1.css";
import PublishIcon from "@mui/icons-material/Publish";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { updateBox } from "../../../../redux/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import app from "../../../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
export default function MyBox() {
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[3];

  const product = useSelector((state) =>
    state.box.boxes.find((product) => product._id === productId)
  );
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
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
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
          console.log({ ...inputs, icon: downloadURL });
          const product = { ...inputs, icon: downloadURL };
          updateBox(productId, product, dispatch);
          toast("Product updated!");
        });
      }
    );
  };

  return (
    <div className="product">
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.icon} alt="" className="productInfoImg" />
            <span className="productName">{product.header}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">text:</span>
              <span className="productInfoValue">{product.text}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <div className="productTitleContainer">
          <h1 className="productTitle">Box</h1>
        </div>
        <form className="productForm">
          <div className="productFormLeft">
            <label>Box Header</label>
            <input
              type="text"
              name="header"
              value={inputs.header}
              onChange={handleChange}
            />
          </div>
          <div className="productFormLeft">
            <label>Box Text</label>
            <textarea
              type="text"
              name="text"
              size="700"
              value={inputs.text}
              onChange={handleChange}
            />
          </div>
          <div className="productFormRight" style={{marginTop: "20px"}}>
            <div className="productUpload">
              <img src={product.icon} alt="" className="productUploadImg" />
              <label for="file">
                <PublishIcon />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
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
