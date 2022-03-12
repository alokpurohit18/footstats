import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import SubNav from "../../common/SubNav/SubNav.jsx";
import LeaguesSection from "../LeaguesSection/LeaguesSection.jsx";
import PlayersSection from "../PlayersSection/PlayersSection.jsx";
import TransfersSection from "../TransfersSection/TransfersSection.jsx";
import AwardsSection from "../AwardsSection/AwardsSection.jsx";
import WorldCupSection from "../WorldCupSection/WordlCupSection.jsx";

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
          elementWidth="4"
        />
        <Routes>
          <Route
            path="/"
            element={
              <LeaguesSection
                sectionHeading="Football Leagues"
                cardCount="10"
                cardStart="0"
              />
            }
          />
          <Route
            path="players"
            element={
              <PlayersSection
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
                sectionHeading="Football Transfers (2021-2022)"
                cardCount="10"
                cardStart="0"
              />
            }
          />
          <Route
            path="awards"
            element={
              <AwardsSection
                sectionHeading="Ballon d'Or Awards"
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
                options={[
                  { label: "Group A", value: "Group A" },
                  { label: "Group B", value: "Group B" },
                  { label: "Group C", value: "Group C" },
                  { label: "Group D", value: "Group D" },
                  { label: "Group E", value: "Group E" },
                  { label: "Group F", value: "Group F" },
                  { label: "Group G", value: "Group G" },
                  { label: "Group H", value: "Group H" },
                  { label: "Knockout", value: "Knockout" },
                ]}
                dataArray={[
                  {
                    label: "Group A",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/a.png?raw=true",
                  },
                  {
                    label: "Group B",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/b.png?raw=true",
                  },
                  {
                    label: "Group C",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/c.png?raw=true",
                  },
                  {
                    label: "Group D",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/d.png?raw=true",
                  },
                  {
                    label: "Group E",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/e.png?raw=true",
                  },
                  {
                    label: "Group F",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/f.png?raw=true",
                  },
                  {
                    label: "Group G",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/g.png?raw=true",
                  },
                  {
                    label: "Group H",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/h.png?raw=true",
                  },
                  {
                    label: "Knockout",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/Knockout.png?raw=true",
                  },
                ]}
                src={[
                  "https://cloudinary.fifa.com/api/v1/picture/tournaments-sq-4/254645?tx=c_fill,g_auto,q_auto,w_150",
                  "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/pogba.png?raw=true",
                  "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/score.png?raw=true",
                  "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/awards.png?raw=true",
                  "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/sponsors.png?raw=true",
                  "https://www.youtube.com/embed/UUM3FuNVYho",
                ]}
              />
            }
          />
          <Route
            path="euro_2020"
            element={
              <WorldCupSection
                sectionHeading="UEFA Euro 2020"
                cardCount="5"
                cardStart="0"
                options={[
                  { label: "Group A", value: "Group A" },
                  { label: "Group B", value: "Group B" },
                  { label: "Group C", value: "Group C" },
                  { label: "Group D", value: "Group D" },
                  { label: "Group E", value: "Group E" },
                  { label: "Group F", value: "Group F" },
                  { label: "Knockout", value: "Knockout" },
                ]}
                dataArray={[
                  {
                    label: "Group A",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/aa.png?raw=true",
                  },
                  {
                    label: "Group B",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/bb.png?raw=true",
                  },
                  {
                    label: "Group C",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/cc.png?raw=true",
                  },
                  {
                    label: "Group D",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/dd.png?raw=true",
                  },
                  {
                    label: "Group E",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/ee.png?raw=true",
                  },
                  {
                    label: "Group F",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/ff.png?raw=true",
                  },
                  {
                    label: "Knockout",
                    value:
                      "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/knocks.png?raw=true",
                  },
                ]}
                src={[
                  "https://img.uefa.com/imgml/uefacom/euro2020/logo.png",
                  "https://cdn.vox-cdn.com/thumbor/y8oUFyGL2pfrhwvX1vzbs_veOv4=/0x0:4380x3329/1200x800/filters:focal(1758x1181:2458x1881)/cdn.vox-cdn.com/uploads/chorus_image/image/69571223/1328315668.0.jpg",
                  "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/pgb.png?raw=true",
                  "https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/sddd.png?raw=true",
                  "https://www.connexi.co/wp-content/uploads/2021/06/iSC-Photo-Small.jpg",
                  "https://www.youtube.com/embed/gL4XDoJcfZc",
                ]}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
export default StatsPage;
