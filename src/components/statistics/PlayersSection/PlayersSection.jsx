import * as React from "react";
import "antd/dist/antd.css";
import PlayerRatings from "./PlayerRatings.jsx";
import PlayerBase from "./PlayerBase.jsx";
import PlayerAttributes from "./PlayerAttributes.jsx";
import Search from "../../common/Search/Search.jsx";
import playerNames from "../../../api/data/playerNames.json";
import LoadAPI from "../../../utils/LoadAPI.jsx";
import "./PlayersSection.scss";

class PlayersSection extends React.Component {
  sectionHeading;
  abilityArray;

  constructor(props) {
    super(props);
    this.sectionHeading = this.props.sectionHeading;
    this.abilityArray = [];
    this.state = {
      player: {},
      apiLoaded: false,
      sourceLink: 0,
    };
  }

  setData = (player) => {
    this.setState({
      player: player,
      apiLoaded: true,
    });
  };

  setSourceLink = (link) => {
    this.setState({
      sourceLink: link,
      apiLoaded: false,
    });
  };

  loadFinancialData = (value) => {
    let returnString = value;
    value = parseFloat(value);
    if (value < 1000) {
      return value;
    } else if (value >= 1000 && value < 1000000) {
      value = value / 1000.0;
      returnString = value.toString() + "K";
      return returnString;
    } else {
      value = value / 1000000.0;
      returnString = value.toString() + "M";
      return returnString;
    }
  };

  createPlayerSpecialities = (speciality) => {
    speciality = speciality.trim();
    return (
      <div key={speciality} className="label">
        {speciality}
      </div>
    );
  };

  loadPlayerSpecialities = (specialities) => {
    this.abilityArray = specialities.split(",");
  };

  render() {
    return (
      <div className="players-section-main">
        {this.state.apiLoaded ? null : (
          <LoadAPI
            url="/player_details"
            sourceLink={this.state.sourceLink}
            setData={this.setData}
          />
        )}
        <Search
          id={1}
          placeholder="Search for Players"
          playerNames={playerNames}
          setSourceLink={this.setSourceLink}
          callSource="player_details"
        />
        <h2 className="player-card-heading">
          {Object.keys(this.state.player).length === 0 &&
          this.state.player.constructor === Object
            ? null
            : this.state.player.personal_details.name.short_name}
        </h2>
        {Object.keys(this.state.player).length === 0 &&
        this.state.player.constructor === Object ? null : (
          <div className="player-card-main ant-row">
            <div className="ant-col ant-col-6">
              <PlayerRatings player={this.state.player} />
            </div>
            <div className="player-details ant-col ant-col-18">
              <div className="ant-row">
                <div className="ant-col">
                  <img
                    className="profile-pic"
                    alt="profile pic"
                    src={this.state.player.personal_details.face_url}
                  />
                </div>
                <div className="general-details ant-col">
                  <h2 className="card-heading">
                    {this.state.player.personal_details.name.long_name}
                  </h2>
                  <div className="ant-row">
                    <div className="ant-col">
                      <img
                        className="nation-flag-logo"
                        alt="nation flag logo"
                        src={this.state.player.national_team.flag_url}
                      />
                    </div>
                    <div className="ant-col">
                      {this.state.player.personal_details.positions.replace(
                        ",",
                        ""
                      )}
                    </div>
                  </div>
                  <div>
                    <span>Date of Birth: </span>
                    {this.state.player.personal_details.dob}
                  </div>
                  <div>
                    <span>Age: </span>
                    {this.state.player.personal_details.age}
                  </div>
                </div>
                <div className="overall-ratings ant-row">
                  <div className="overall ant-col">
                    <div className="span-container">
                      <span>{this.state.player.stats.generic.overall}</span>
                    </div>
                    <div>Overall</div>
                  </div>
                  <div className="potential ant-col">
                    <div className="span-container">
                      <span>{this.state.player.stats.generic.potential}</span>
                    </div>
                    <div>Potential</div>
                  </div>
                </div>
              </div>
              <div className="ant-row">
                <div className="profile ant-col">
                  <h2 className="sub-heading">PROFILE</h2>
                  <div>
                    <span className="label">FIFA ID: </span>
                    {this.state.player.personal_details.fifa_id}
                  </div>
                  <div>
                    <span className="label">Body Type: </span>
                    {this.state.player.personal_details.body_type}
                  </div>
                  <div>
                    <span className="label">Height: </span>
                    {this.state.player.personal_details.height + "cm"}
                  </div>
                  <div>
                    <span className="label">Weight: </span>
                    {this.state.player.personal_details.weight + "kg"}
                  </div>
                  <div>
                    <span className="label">Market Value: </span>
                    {"€" +
                      this.loadFinancialData(
                        this.state.player.financials.market_value
                      )}
                  </div>
                  <div>
                    <span className="label">Wages: </span>
                    {"€" +
                      this.loadFinancialData(this.state.player.financials.wage)}
                  </div>
                  <div>
                    <span className="label">Release Clause: </span>
                    {"€" +
                      this.loadFinancialData(
                        this.state.player.financials.release_clause
                      )}
                  </div>
                  <div>
                    <span className="label">Work Rate: </span>
                    {this.state.player.stats.defending.work_rate}
                  </div>
                  <div>
                    <span className="label">Preferred Foot:</span>{" "}
                    {this.state.player.personal_details.preferred_foot}
                  </div>
                  <div>
                    <span className="label">Weak Foot:</span>{" "}
                    {this.state.player.stats.skill.weak_foot_rating + "⭐"}
                  </div>
                  <div>
                    <span className="label">Skill Moves:</span>{" "}
                    {this.state.player.stats.skill.skill_moves_rating + "⭐"}
                  </div>
                  <div>
                    <span className="label">International:</span>{" "}
                    {this.state.player.national_team.international_reputation +
                      "⭐"}
                  </div>
                </div>
                <div className="player-specialities ant-col">
                  <h2 className="sub-heading">SPECIALITIES</h2>
                  {this.loadPlayerSpecialities(
                    this.state.player.stats.generic.tags
                  )}
                  {this.abilityArray.map(this.createPlayerSpecialities)}
                </div>
                <div className="club-info ant-col">
                  <div className="ant-row">
                    <div className="ant-col">
                      <img
                        className="club-flag-logo"
                        alt="club flag logo"
                        src={this.state.player.club.flag_url}
                      />
                    </div>
                    <div className="sub-heading ant-col">
                      {this.state.player.club.name.toUpperCase()}
                    </div>
                  </div>
                  <div className="ant-row">
                    <img
                      className="club-logo"
                      alt="club logo"
                      src={this.state.player.club.logo_url}
                    />
                  </div>
                  <div>
                    <span className="label">Position: </span>
                    {this.state.player.club.position}
                  </div>
                  <div>
                    <span className="label">Kit Number: </span>
                    {this.state.player.club.jersey_number}
                  </div>
                  {this.state.player.club.loaned_from === "" ? (
                    <div>
                      <span className="label">Joined: </span>
                      {this.state.player.club.joined}
                    </div>
                  ) : (
                    <div>
                      <span className="label">Loaned From: </span>
                      {this.state.player.club.loaned_from}
                    </div>
                  )}
                  <div>
                    <span className="label">Contract Valid Until: </span>
                    {this.state.player.club.contract_valid_until}
                  </div>
                  <div>
                    <span className="label">League: </span>
                    {this.state.player.club.league.name}
                  </div>
                </div>
                {this.state.player.national_team.id === "" ? null : (
                  <div className="nation-info ant-col">
                    <div className="ant-row">
                      <div className="ant-col">
                        <img
                          className="nation-flag-logo"
                          alt="nation flag logo"
                          src={this.state.player.national_team.flag_url}
                        />
                      </div>
                      <div className="sub-heading ant-col">
                        {this.state.player.national_team.name.toUpperCase()}
                      </div>
                    </div>
                    <div className="ant-row">
                      <img
                        className="club-logo"
                        alt="club logo"
                        src={this.state.player.national_team.logo_url}
                      />
                    </div>
                    <div>
                      <span className="label">Position: </span>
                      {this.state.player.national_team.position}
                    </div>
                    <div>
                      <span className="label">Kit Number: </span>
                      {this.state.player.national_team.jersey_number}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <PlayerBase player={this.state.player} />
            <PlayerAttributes
              player={this.state.player}
              loadPlayerSpecialities={this.loadPlayerSpecialities}
              createPlayerSpecialities={this.createPlayerSpecialities}
            />
          </div>
        )}
      </div>
    );
  }
}
export default PlayersSection;
