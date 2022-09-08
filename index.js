const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const articleRoute = require("./routes/articleRoute");
const boxRoute = require("./routes/boxRoute");
const buyFieldRoute = require("./routes/buyFieldRoute");
const headerRoute = require("./routes/headerRoute");
const howToNFTRoute = require("./routes/howToNFTRoute");
const leftVirtualBoxRoute = require("./routes/leftVirtualBoxRoute");
const mainRoute = require("./routes/mainRoute");
const metaBoxRoute = require("./routes/metaBoxRoute");
const metaBoxContentRoute = require("./routes/metaBoxContentRoute");
const NFTRoute = require("./routes/NFTRoute");
const planRoute = require("./routes/planRoute");
const rightVirtualBoxRoute = require("./routes/rightVirtualBoxRoute");
const roadMapRoute = require("./routes/roadMapRoute");
const statisticsRoute = require("./routes/statisticsRoute");
const statisticsLowerRoute = require("./routes/statisticsLowerRoute");
const virtualBoxRoute = require("./routes/virtualBoxRoute");
const whatIsInsideRoute = require("./routes/whatIsInsideRoute");
const auth = require("./middleware/auth");
const cors = require("cors");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection Successful"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());

app.use("/api/article", articleRoute);
app.use("/api/whatIsInside", whatIsInsideRoute);
app.use("/api/virtualBox", virtualBoxRoute);
app.use("/api/statisticsLower", statisticsLowerRoute);
app.use("/api/statistics", statisticsRoute);
app.use("/api/roadMap", roadMapRoute);
app.use("/api/rightVirtualBox", rightVirtualBoxRoute);
app.use("/api/plan", planRoute);
app.use("/api/NFT", NFTRoute);
app.use("/api/box", boxRoute);
app.use("/api/metaBoxContent", metaBoxContentRoute);
app.use("/api/metaBox", metaBoxRoute);
app.use("/api/main", mainRoute);
app.use("/api/leftVirtualBox", leftVirtualBoxRoute);
app.use("/api/howToNFT", howToNFTRoute);
app.use("/api/header", headerRoute);
app.use("/api/buyField", buyFieldRoute);
app.use("/api/auth", auth);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is up on PORT" + process.env.PORT || 5000);
});
