import * as React from "react";
import "antd/dist/antd.css";
import LoadAPI from "../../../utils/LoadAPI.jsx";
import Menu from "../../common/Menu/Menu.jsx";
import LeagueCard from "./LeagueCard.jsx";
import "./LeagueSection.scss";

class LeaguesSection extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { label: "Premier League", value: "Premier League" },
      { label: "Bundesliga", value: "Bundesliga" },
      { label: "La Liga", value: "La Liga" },
      { label: "Serie A", value: "Serie A" },
      { label: "Ligue 1", value: "Ligue 1" },
    ];
    this.state = {
      leagueFilter: "Premier League",
    };
  }

  filterLeagueCards = (selectedObject) => {
    this.setState({
      leagueFilter: selectedObject.value,
    });
  };

  render() {
    return (
      <div className="leagues-section-main">
        <LoadAPI url="/league_details" sourceLink="none" setData={null} />
        <h2>{this.props.sectionHeading}</h2>
        <div className="menu-container">
          <Menu
            options={this.options}
            placeholder="Select a League"
            filterCards={this.filterLeagueCards}
          />
        </div>
        <LeagueCard leagueFilter={this.state.leagueFilter} />
      </div>
    );
  }
}
export default LeaguesSection;
