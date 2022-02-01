import * as React from "react";
import "antd/dist/antd.css";
import Menu from "../Menu/Menu.jsx";
import SubNav from "../SubNav/SubNav.jsx";
import LoadAPI from "../../utils/LoadAPI";
import { Routes, Route } from "react-router-dom";

class StatsPage extends React.Component {
  player;
  options;

  constructor(props) {
    super(props);
    this.player = "";
    this.options = [
      { value: "League", label: "Leagues" },
      { value: "Player", label: "Players" },
      { value: "World Cup", label: "World Cups" },
    ];
  }

  loadPlayerObject = (player) => {
    this.player = player;
  };

  filterCards = () => {};

  render() {
    return (
      <div className="stats-page-main">
        <SubNav
          pages={[
            {
              name: "League Stats",
              link: "leagues",
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
          ]}
        />
        {/* <div className="dropdown-menu-container">
          <Menu
            options={this.options}
            placeholder="Select an option"
            filterCards={this.filterCards}
          />
          <LoadAPI
            url="/fifa22"
            sourceLink="9"
            loadPlayerObject={this.loadPlayerObject}
          />
        </div> */}

        <Routes>
          <Route path="leagues" element={<Menu />} />
          <Route path="players" element={<Menu />} />
          <Route path="world_cup_2018" element={<Menu />} />
          <Route path="euro_2020" element={<Menu />} />
          <Route path="awards" element={<Menu />} />
          <Route path="transfers" element={<Menu />} />
        </Routes>
      </div>
    );
  }
}
export default StatsPage;
