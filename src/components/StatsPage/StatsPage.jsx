import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import SubNav from "../SubNav/SubNav.jsx";
import LeaguesSection from "../LeaguesSection/LeaguesSection.jsx";
import PlayersSection from "../PlayersSection/PlayersSection.jsx";
import TransfersSection from "../TransfersSection/TransfersSection.jsx";
import AwardsSection from "../AwardsSection/AwardsSection.jsx";
import WorldCupSection from "../WorldCupSection/WordlCupSection.jsx";
import EuroSection from "../EuroSection/EuroSection.jsx";

class StatsPage extends React.Component {
  pages;

  constructor(props) {
    super(props);
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
        name: "Transfers",
        link: "transfers",
      },
      {
        name: "Awards",
        link: "awards",
      },
      {
        name: "FIFA World Cup",
        link: "world_cup_2018",
      },
      {
        name: "UEFA Euro",
        link: "euro_2020",
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

  filterCards = () => {};

  render() {
    return (
      <div className="stats-page-main">
        <SubNav
          pages={this.pages}
          handleNavElementClick={this.handleNavElementClick}
        />
        <Routes>
          <Route
            path="/"
            element={
              <LeaguesSection
                sectionHeading="Leagues"
                cardCount="10"
                cardStart="0"
              />
            }
          />
          <Route
            path="players"
            element={
              <PlayersSection
                sectionHeading="Players"
                cardCount="5"
                cardStart="0"
                leagueFilter="all"
                scoreCardIsLarge={true}
              />
            }
          />
          <Route
            path="transfers"
            element={
              <TransfersSection
                sectionHeading="Transfers"
                cardCount="10"
                cardStart="0"
              />
            }
          />
          <Route
            path="awards"
            element={
              <AwardsSection
                sectionHeading="Awards"
                cardCount="10"
                cardStart="0"
              />
            }
          />
          <Route
            path="world_cup_2018"
            element={
              <WorldCupSection
                sectionHeading="FIFA World Cup 2018"
                cardCount="10"
                cardStart="0"
              />
            }
          />
          <Route
            path="euro_2020"
            element={
              <EuroSection
                sectionHeading="UEFA Euro 2020"
                cardCount="5"
                cardStart="0"
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
export default StatsPage;
