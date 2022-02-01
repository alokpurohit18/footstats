import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Menu from "../Menu/Menu.jsx";
import SubNav from "../SubNav/SubNav.jsx";
import ScoresSection from "../ScoresSection/ScoresSection.jsx";
import LoadAPI from "../../utils/LoadAPI";

class StatsPage extends React.Component {
  player;
  pages;

  constructor(props) {
    super(props);
    this.player = "";
    this.pages = [
      {
        name: "League Stats",
        link: "/statistics",
      },
      {
        name: "Player Stats",
        link: "players",
      },
      {
        name: "World Cup 2018",
        link: "world_cup_2018",
      },
      {
        name: "UEFA Euro 2020",
        link: "euro_2020",
      },
      {
        name: "Awards",
        link: "awards",
      },
      {
        name: "Transfers",
        link: "transfers",
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

  loadPlayerObject = (player) => {
    this.player = player;
  };

  filterCards = () => {};

  render() {
    return (
      <div className="stats-page-main">
        <SubNav
          pages={this.pages}
          handleNavElementClick={this.handleNavElementClick}
        />
        {/* <div className="dropdown-menu-container">
          <LoadAPI
            url="/fifa22"
            sourceLink="9"
            loadPlayerObject={this.loadPlayerObject}
          />
        </div> */}
        <div className="ant-row">
          <div className="ant-col ant-col-8"></div>
          <div className="ant-col ant-col-8">
            <Routes>
              <Route
                path="/"
                element={
                  <ScoresSection
                    sectionHeading="Latest Fixtures"
                    cardCount="10"
                    cardStart="0"
                    leagueFilter="all"
                  />
                }
              />
              <Route path="players" element={<Menu />} />
              <Route path="world_cup_2018" element={<Menu />} />
              <Route path="euro_2020" element={<Menu />} />
              <Route path="awards" element={<Menu />} />
              <Route path="transfers" element={<Menu />} />
            </Routes>
          </div>
          <div className="ant-col ant-col-8"></div>
        </div>
      </div>
    );
  }
}
export default StatsPage;
