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
import NewMain from "./pages/admin/pages/Main/Main";
import MyMain from "./pages/admin/pages/Main/ExistingMain";
import MyStatistics from "./pages/admin/pages/Statistics/ExistingStatistics";
import NewStatistic from "./pages/admin/pages/Statistics/Statistics";
import MyPlan from "./pages/admin/pages/Plan/ExistingPlan";
import NewPlan from "./pages/admin/pages/Plan/Plan";
import BuyField from "./pages/admin/pages/BuyField/ExistingBuyField";
import NewBuyField from "./pages/admin/pages/BuyField/BuyField";
import MyMetaBox from "./pages/admin/pages/MetaBox/ExistingMetaBox";
import NewMetaBox from "./pages/admin/pages/MetaBox/MetaBox";
import MyNFT from "./pages/admin/pages/NFT/ExistingNFT";
import NewNFT from "./pages/admin/pages/NFT/NFT";
import RoadMap from "./pages/admin/pages/RoadMap/ExistingRoadMap";
import NewRoadMap from "./pages/admin/pages/RoadMap/RoadMap";
import BoxList from "./pages/admin/pages/Box/BoxList";
import NewBox from "./pages/admin/pages/Box/Box";
import MyBox from "./pages/admin/pages/Box/ExistingBox";
import MyVirtualBox from "./pages/admin/pages/VirtualBox/ExistingVirtualBox";
import NewVirtualBox from "./pages/admin/pages/VirtualBox/VirtualBox";
import MyWii from "./pages/admin/pages/WhatIsInside/ExistingWii";
import NewWii from "./pages/admin/pages/WhatIsInside/WhatIsInside";
import NewContract from "./pages/admin/pages/Contract/Contract";
import Contract from "./pages/admin/pages/Contract/ExistingContract";
import MySale from "./pages/admin/pages/Sale/ExistingSale";
import NewSale from "./pages/admin/pages/Sale/Sale";

function App() {
  let [showAlert, setshowAlert] = useState(false);
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  const header = useSelector((state) => state.header.headers);
  const article = useSelector((state) => state.article.articles);
  const main = useSelector((state) => state.main.mains);
  const statistic = useSelector((state) => state.statistic.statistics);
  const plan = useSelector((state) => state.plan.plans);
  const buy = useSelector((state) => state.buyField.buyFields);
  const meta = useSelector((state) => state.metaBox.metaBoxes);
  const nft = useSelector((state) => state.nft.nfts);
  const road = useSelector((state) => state.roadMap.roadMaps);
  const virt = useSelector((state) => state.virtualBox.virtualBoxes);
  const wii = useSelector((state) => state.wii.wiis);
  const contract = useSelector((state) => state.contract.contracts);
  const sale = useSelector((state) => state.sale.sales);
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
                {main ? (
                  <Route path="/admin/main" element={<MyMain />} />
                ) : (
                  <Route path="/admin/main" element={<NewMain />} />
                )}
                {statistic ? (
                  <Route path="/admin/stats" element={<MyStatistics />} />
                ) : (
                  <Route path="/admin/stats" element={<NewStatistic />} />
                )}
                {plan ? (
                  <Route path="/admin/plan" element={<MyPlan />} />
                ) : (
                  <Route path="/admin/plan" element={<NewPlan />} />
                )}
                {buy ? (
                  <Route path="/admin/buy" element={<BuyField />} />
                ) : (
                  <Route path="/admin/buy" element={<NewBuyField />} />
                )}
                {meta ? (
                  <Route path="/admin/meta" element={<MyMetaBox />} />
                ) : (
                  <Route path="/admin/meta" element={<NewMetaBox />} />
                )}
                {nft ? (
                  <Route path="/admin/nft" element={<MyNFT />} />
                ) : (
                  <Route path="/admin/nft" element={<NewNFT />} />
                )}
                {road ? (
                  <Route path="/admin/road" element={<RoadMap />} />
                ) : (
                  <Route path="/admin/road" element={<NewRoadMap />} />
                )}
                {virt ? (
                  <Route path="/admin/virtbox" element={<MyVirtualBox />} />
                ) : (
                  <Route path="/admin/virtbox" element={<NewVirtualBox />} />
                )}
                {wii ? (
                  <Route path="/admin/wii" element={<MyWii />} />
                ) : (
                  <Route path="/admin/wii" element={<NewWii />} />
                )}
                {contract ? (
                  <Route path="/admin/contract" element={<Contract />} />
                ) : (
                  <Route path="/admin/contract" element={<NewContract />} />
                )}
                {sale ? (
                  <Route path="/admin/sale" element={<MySale />} />
                ) : (
                  <Route path="/admin/sale" element={<NewSale />} />
                )}
                <Route path="/admin/boxlist" element={<BoxList />}/>
                <Route path="/admin/newbox" element={<NewBox />}/>
                <Route path="/admin/box/:id" element={<MyBox />}/>
                
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
