import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/footer";
import Main from "./pages/main/Main";
import Sale from "./pages/sale/Sale";
import Admin from "./pages/admin/Admin";
import Login from "./pages/admin/pages/Login/Login";
import { useSelector } from "react-redux";
import NewHeader from "./pages/admin/pages/Header/Header";
import Header from "./pages/admin/pages/Header/ExistingHeader";
import NewArticle from "./pages/admin/pages/Article/Article";
import Article from "./pages/admin/pages/Article/ExistingArticle";

function App() {
  let [showAlert, setshowAlert] = useState(false);
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  const header = useSelector((state) => state.header.headers);
  const article = useSelector((state) => state.article.articles);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main admin={admin} />} />
          {!admin && <Route path="/login" element={<Login />} />}
          <Route path="/sale" element={<Sale setshowAlert={setshowAlert} />} />
          {admin && (
            <>
              <Route path="/admin" element={<Admin />}>
                {header ? (
                  <Route path="/admin/header" element={<Header />} />
                ) : (
                  <Route path="/admin/header" element={<NewHeader />} />
                )}
                {article ? (
                  <Route path="/admin/article" element={<Article />} />
                ) : (
                  <Route path="/admin/article" element={<NewArticle />} />
                )}
              </Route>
            </>
          )}
        </Routes>

        <Footer />
      </BrowserRouter>

      <div className={"alert " + (showAlert && "show_alert")}>
        Install MetaMask please!
      </div>
    </div>
  );
}

export default App;
