import * as React from "react";
import "antd/dist/antd.css";
import AwardCard from "./AwardCard.jsx";
import Menu from "../../common/Menu/Menu.jsx";
import awardsData from "../../../api/data/awardsData.json";
import "./AwardsSection.scss";

class AwardsSection extends React.Component {
  constructor(props) {
    super(props);
    this.yearsArray = [];
    this.options = [];
    this.dataArray = [
      {
        Year: 2021,
        Rank: 1,
        Player: "Lionel Messi",
        Club: "FC Barcelona",
        Nationality: "Argentina",
        Points: 613,
        P1: 90,
        P2: 5,
        P3: 1,
        P4: 0,
        P5: 0,
        Votes: 96,
        RankPts: 50,
        Share: 0.3285,
        Percent: 0.9854,
        Voted: 1,
      },
      {
        Year: 2021,
        Rank: 2,
        Player: "Robert Lewandowski",
        Club: "FC Bayern Munich",
        Nationality: "Poland",
        Points: 580,
        P1: 70,
        P2: 15,
        P3: 11,
        P4: 3,
        P5: 0,
        Votes: 86,
        RankPts: 40,
        Share: 0.2885,
        Percent: 0.7854,
        Voted: 1,
      },
      {
        Year: 2021,
        Rank: 3,
        Player: "Jorginho",
        Club: "Chelsea FC",
        Nationality: "Italy",
        Points: 460,
        P1: 46,
        P2: 25,
        P3: 11,
        P4: 23,
        P5: 0,
        Votes: 86,
        RankPts: 40,
        Share: 0.2885,
        Percent: 0.7854,
        Voted: 1,
      },
    ];
    this.state = {
      yearFilter: 2021,
    };
  }

  setYears = () => {
    for (let i = 0; i < awardsData.length; i++) {
      this.yearsArray[this.yearsArray.length] = awardsData[i].Year;
    }
  };

  reduceYears = () => {
    this.options = [];
    this.yearsArray = this.yearsArray.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    for (let i = 0; i < this.yearsArray.length; i++) {
      this.options.push({
        value: this.yearsArray[i],
        label: this.yearsArray[i],
      });
    }

    this.options = this.options.reverse();
  };

  setDataArray = () => {
    this.dataArray = [];
    let searchArray = awardsData;
    let data = [];
    for (let i = 0; i < searchArray.length; i++) {
      if (searchArray[i].Year === this.state.yearFilter) {
        if (
          searchArray[i].Rank === 1 ||
          searchArray[i].Rank === 2 ||
          searchArray[i].Rank === 3
        ) {
          data[data.length] = searchArray[i];
        }
      }
    }
    this.dataArray = data;
  };

  filterYearCards = (selectedObject) => {
    this.setState({
      yearFilter: selectedObject.label,
    });
  };

  render() {
    return (
      <div className="transfers-section-main">
        {this.setYears()}
        {this.reduceYears()}
        {this.setDataArray()}
        <h2>{this.props.sectionHeading}</h2>
        <div className="menu-container">
          <Menu
            options={this.options}
            placeholder="Select a Year"
            filterCards={this.filterYearCards}
          />
        </div>
        <AwardCard cardInfo={this.dataArray} year={this.state.yearFilter} />
      </div>
    );
  }
}
export default AwardsSection;
