import React from "react";
import ReactDOM from "react-dom";
import { Steps } from "antd";
import "./index.less";

const { Step } = Steps;

function getTotalPoints() {
  // get total points 
  return 200; // return the total amount of points the banker has (this is a fake total)
}

function getCurrentLevel() {
  var currentLevel;
  var totalPoints = getTotalPoints(); 
  if (totalPoints < 50) {
    currentLevel = 0; // level 1
  } else if (totalPoints >= 50 && totalPoints < 100) {
    currentLevel = 1; // level 2
  } else if (totalPoints >= 100 && totalPoints < 150) {
    currentLevel = 2; // level 3
  } else {
    currentLevel = 3; // level 4
  }
  return currentLevel;
}

function getLevelMax() {
  var levelMax;
  var currentLevel = getCurrentLevel();
  if (currentLevel === 0) {
    levelMax = 50;
  } else if (currentLevel === 1) {
    levelMax = 100;
  } else if (currentLevel === 2) {
    levelMax = 150;
  }
  return levelMax;
}

function getDescription() {
  var levelMax = getLevelMax();
  var totalPoints = getTotalPoints();
  var pointsLeft = levelMax - totalPoints;
  var description = pointsLeft + " points until the next level!";

  return description.toString();
}

ReactDOM.render(
  <div className="App">
  <Steps current={getCurrentLevel()} direction={"horizontal"}>
    {getCurrentLevel() === 0 ? <Step title="Level 1" description={getDescription()}/> : <Step title="Level 1"/>}
    {getCurrentLevel() === 1 ? <Step title="Level 2" description={getDescription()}/> : <Step title="Level 2"/>}
    {getCurrentLevel() === 2 ? <Step title="Level 3" description={getDescription()}/> : <Step title="Level 3"/>}
    <Step title="Level 4"/> 
  </Steps>
  </div>,
  document.getElementById("root")
);