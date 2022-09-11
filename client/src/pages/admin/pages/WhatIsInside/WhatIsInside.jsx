import "../../styles.css";
import { addWii } from "../../../../redux/apiCalls";
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
export default function NewWii() {
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
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log({ ...inputs, icon: downloadURL});
          const product = { ...inputs, icon: downloadURL};
          addWii(product, dispatch);
          toast("Product added!");
        });
      }
    );
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New VirtualBox Bottom</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Icon</label>
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
          <label>Header Purple</label>
          <input
            name="headerp"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Text 1</label>
          <textarea
            name="text1"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Text 2</label>
          <textarea
            name="text2"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Text 3</label>
          <textarea
            name="text3"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Text 4</label>
          <textarea
            name="text4"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Text 5</label>
          <textarea
            name="text5"
            type="text"
            placeholder="text"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Text 6</label>
          <textarea
            name="text6"
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
