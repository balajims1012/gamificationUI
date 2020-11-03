import React from "react";
import ReactDOM from "react-dom";
import { Steps } from "antd";
import "./index.less";

const { Step } = Steps;

ReactDOM.render(
  <div className="App">
  <Steps current={1} direction={"horizontal"}>
    <Step title="Level 1" />
    <Step title="Level 2" subTitle="Left: 2 Referrals" />
    <Step title="Level 3" />
    <Step title="Level 4" />
  </Steps>
  </div>,
  document.getElementById("root")
);