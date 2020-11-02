import React from "react";
import ReactDOM from "react-dom";
import { Steps } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const { Step } = Steps;

ReactDOM.render(
  <div className="App">
  <Steps current={1} percent={60}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
  </div>,
  document.getElementById("root")
);