import * as React from "react";
import "antd/dist/antd.css";
import LoadAPI from "../../utils/LoadAPI";
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
    };
  }

  setData = (player) => {
    this.setState({
      player: player,
      apiLoaded: true,
    });
  };

  loadFinancialData = (value) => {
    let returnString = value;
    value = parseFloat(value);
    if (value < 1000) {
      return value;
    } else if (value >= 1000 && value < 1000000) {
      returnString = returnString.substring(0, 3) + "K";
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
        <h2>{this.sectionHeading}</h2>
        {this.state.apiLoaded ? null : (
          <LoadAPI url="/playerDetails" sourceLink={0} setData={this.setData} />
        )}
        {Object.keys(this.state.player).length === 0 &&
        this.state.player.constructor === Object ? null : (
          <div className="player-card-main ant-row">
            <div className="ant-col ant-col-6">
              <h2 className="sub-heading">All Overall Ratings</h2>
              <div className="all-overall-rating "></div>
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
                    <span className="label">International Reputation:</span>{" "}
                    {this.state.player.national_team.international_reputation +
                      "⭐"}
                  </div>
                </div>
                <div className="player-specialities ant-col">
                  <h2 className="sub-heading">PLAYER SPECIALITIES</h2>
                  {this.loadPlayerSpecialities(
                    this.state.player.stats.generic.tags
                  )}
                  {this.abilityArray.map(this.createPlayerSpecialities)}
                </div>
                <div className="club-info ant-col"></div>
                <div className="nation-info ant-col"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default PlayersSection;
