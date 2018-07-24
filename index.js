const express = require("express");
const app = express();
const template = require("./views/template");
const path = require("path");

app.use("/assets", express.static(path.resolve(__dirname, "assets")));
app.use("/media", express.static(path.resolve(__dirname, "media")));

app.disable("x-powered-by");

app.listen(process.env.PORT || 8000);

let initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const ssr = require("./views/server");

app.get("/", (req, res) => {
  const { preloadedState, content } = ssr(initialState);
  const response = template("Методы отслеживания. Remote Redux DevTools", preloadedState, content);
  res.setHeader("Cache-Control", "assets, max-age=604800");
  res.send(response);
});
