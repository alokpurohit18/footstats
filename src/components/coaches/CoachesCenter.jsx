import * as React from "react";
import "antd/dist/antd.css";
import "./CoachesCenter.scss";
import Subnav from "../common/SubNav/SubNav";
import { Route, Routes } from "react-router-dom";

class CoachesCenter extends React.Component {
  constructor(props) {
    super(props);
    this.pages = [
      {
        name: "Player Similarity Prediction Model",
        link: "/coaches_center",
      },
      {
        name: "Expected Goals Prediction Model",
        link: "xg_model",
      },
    ];
  }

  handleNavElementClick = (selectedElement) => {
    let pageObject = {};
    for (let i = 0; i < this.pages.length; i++) {
      pageObject = this.pages[i];
      let element = document.querySelector(
        "#" + CSS.escape(pageObject.name) + " a"
      );
      if (pageObject.name === selectedElement.target.innerHTML) {
        element.style.backgroundColor = "whitesmoke";
        element.style.color = "black";
      } else {
        element.style.backgroundColor = "black";
        element.style.color = "whitesmoke";
      }
    }
  };

  render() {
    return (
      <div className="coaches-center-main">
        <Subnav
          pages={this.pages}
          handleNavElementClick={this.handleNavElementClick}
          elementWidth="12"
        />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Player Similarity Prediction Model</h2>
                <img
                  alt="player similarity model"
                  src="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/Player_Similarity.png?raw=true"
                />
              </div>
            }
          />
          <Route
            path="xg_model"
            element={
              <div>
                <h2>Expected Goals Prediction Model</h2>
                <img
                  alt="Expected Goals model"
                  src="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/Player_Similarity.png?raw=true"
                />
              </div>
            }
          />
        </Routes>
      </div>
    );
  }
}
export default CoachesCenter;
