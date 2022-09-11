import { Link, useLocation } from "react-router-dom";
import "../../styles1.css";
import PublishIcon from "@mui/icons-material/Publish";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getWii, updateWii } from "../../../../redux/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import app from "../../../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
export default function MyWii() {
  const dispatch = useDispatch();
  useEffect(() => {
    getWii(dispatch);
  }, [dispatch]);

  //getLine 1 text1(dispatch);
  const productId = useSelector(
    (state) => state.wii.wiis[0]._id
  );

  const product = useSelector((state) => state.wii.wiis[0]);
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
          updateWii(productId, product, dispatch);
          toast("Product updated!");
        });
      }
    );
  };

  return (
    <div className="product">
      <div className="productTopRight">
        <div className="productInfoTop">
          <img src={product.icon} alt="" className="productInfoImg" />
        </div>
        <div className="productInfoBottom">
          <div className="productInfoItem">
            <span className="productInfoKey">id:</span>
            <span className="productInfoValue">{product._id}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">header</span>
            <span className="productInfoValue">{product.header} {product.headerp}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">text 1</span>
            <span className="productInfoValue">{product.text1}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">text 2</span>
            <span className="productInfoValue">{product.text2}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">text 3</span>
            <span className="productInfoValue">{product.text3}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">text 4</span>
            <span className="productInfoValue">{product.text4}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">text 5</span>
            <span className="productInfoValue">{product.text5}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">text 6</span>
            <span className="productInfoValue">{product.text6}</span>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <div className="productTitleContainer">
          <h1 className="productTitle">VirtualBox Bottom</h1>
        </div>
        <form className="productForm">
          <div className="addProductItem">
            <label>IMG</label>
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
            <label>Header</label>
            <input
              name="headerp"
              type="text"
              placeholder="text"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Text 1</label>
            <input
              name="text1"
              type="text"
              placeholder="text"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Text 2</label>
            <input
              name="text2"
              type="text"
              placeholder="text"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Text 3</label>
            <input
              name="text3"
              type="text"
              placeholder="text"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Text 4</label>
            <input
              name="text4"
              type="text"
              placeholder="text"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Text 5</label>
            <input
              name="text5"
              type="text"
              placeholder="text"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Text 6</label>
            <input
              name="text6"
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
