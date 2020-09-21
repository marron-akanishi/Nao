import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    {window.innerWidth < 768 ? (
      <div className="error-msg">このサイトはPC/タブレット専用です</div>
    ) : (
      <App />
    )}
  </React.StrictMode>,
  document.getElementById("root")
);

window.onload = () => {
  // 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
  let vh = window.innerHeight * 0.01;
  // カスタム変数--vhの値をドキュメントのルートに設定
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
};
