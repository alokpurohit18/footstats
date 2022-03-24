import * as React from "react";
import "antd/dist/antd.css";
import "./CoachesCenter.scss";
import PlayerSimilarity from "./PlayerSimilarity";
import Subnav from "../common/SubNav/SubNav";
import XG1 from "./XG1.jsx";
import XG2 from "./XG2.jsx";
import XG3 from "./XG3.jsx";
import XG4 from "./XG4.jsx";
import XG5 from "./XG5.jsx";
import XG6 from "./XG6.jsx";
import "./XG.scss";
import { Route, Routes } from "react-router-dom";

class CoachesCenter extends React.Component {
  constructor(props) {
    super(props);
    this.pages = [
      {
        name: "Player Similarity",
        link: "/coaches_center",
      },
      {
        name: "Expected Goals",
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
          <Route path="/" element={<PlayerSimilarity />} />
          <Route
            path="xg_model"
            element={
              <div className="xg-main">
                <h2>Predicting Expected Goals</h2>
                <table className="dataframe league-table xg-result">
                  <tbody>
                    <tr>
                      <td>🢄🢆</td>
                      <td>Goals Scored</td>
                      <td>Expected Goals</td>
                    </tr>
                    <tr>
                      <td>Goals Scored</td>
                      <td>1.000000</td>
                      <td>0.976885</td>
                    </tr>
                    <tr>
                      <td>Expected Goals</td>
                      <td>0.976885</td>
                      <td>1.000000</td>
                    </tr>
                  </tbody>
                </table>
                <details open>
                  <summary className="high-xg">Players with Highest xG</summary>
                  <XG2 />
                </details>
                <details>
                  <summary className="finishers">Best Finishers</summary>
                  <XG1 />
                </details>
                <details>
                  <summary className="heading">Best at Heading</summary>
                  <XG3 />
                </details>
                <details>
                  <summary className="outside-box">
                    Best from Outside the Box
                  </summary>
                  <XG4 />
                </details>
                <details>
                  <summary className="assists">Best Assisters</summary>
                  <XG5 />
                </details>
                <details>
                  <summary className="worst">Worst at Shooting</summary>
                  <XG6 />
                </details>
              </div>
            }
          />
        </Routes>
      </div>
    );
  }
}
export default CoachesCenter;
