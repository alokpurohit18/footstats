import * as React from "react";
import "antd/dist/antd.css";
import LoadAPI from "../../../utils/LoadAPI.jsx";
import Menu from "../../common/Menu/Menu.jsx";
import LeagueCard from "./LeagueCard.jsx";

class LeaguesSection extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      {label: "Premier League", value: "premier_league"},
      {label: "Bundesliga", value: "bundesliga"},
      {label: "La Liga", value: "la_liga"},
      {label: "Serie A", value: "serie_a"},
      {label: "Ligue 1", value: "ligue_1"},
    ];
    this.state = {
      leagueFilter: "premier_league",
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
