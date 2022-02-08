import * as React from "react";
import "antd/dist/antd.css";
import LoadAPI from "../../../utils/LoadAPI.jsx";
import "./PlayersSection.scss";
import { soccerBallUrl } from "../../../utils/variables.js";

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
        <h2>
          {Object.keys(this.state.player).length === 0 &&
          this.state.player.constructor === Object
            ? null
            : this.state.player.personal_details.name.short_name}
        </h2>
        {this.state.apiLoaded ? null : (
          <LoadAPI
            url="/playerDetails"
            sourceLink={16}
            setData={this.setData}
          />
        )}
        {Object.keys(this.state.player).length === 0 &&
        this.state.player.constructor === Object ? null : (
          <div className="player-card-main ant-row">
            <div className="ant-col ant-col-6">
              <h2 className="sub-heading">All Overall Ratings</h2>
              <div className="all-overall-rating">
                <div className="all-overall-container">
                  <div className="ant-row">
                    <div className="ant-row row-container">
                      <div className="ant-col">
                        <div>LS</div>
                        <div>{this.state.player.stats.rating_as.attack.ls}</div>
                      </div>
                      <div className="ant-col">
                        <div>ST</div>
                        <div>{this.state.player.stats.rating_as.attack.st}</div>
                      </div>
                      <div className="ant-col">
                        <div>RS</div>
                        <div>{this.state.player.stats.rating_as.attack.rs}</div>
                      </div>
                    </div>
                  </div>
                  <div className="ant-row">
                    <div className="ant-row row-container">
                      <div className="ant-col">
                        <div>LW</div>
                        <div>{this.state.player.stats.rating_as.attack.lw}</div>
                      </div>
                      <div className="ant-col">
                        <div>LF</div>
                        <div>{this.state.player.stats.rating_as.attack.lf}</div>
                      </div>
                      <div className="ant-col">
                        <div>CF</div>
                        <div>{this.state.player.stats.rating_as.attack.cf}</div>
                      </div>
                      <div className="ant-col">
                        <div>RF</div>
                        <div>{this.state.player.stats.rating_as.attack.rf}</div>
                      </div>
                      <div className="ant-col">
                        <div>RW</div>
                        <div>{this.state.player.stats.rating_as.attack.rw}</div>
                      </div>
                    </div>
                  </div>
                  <div className="ant-row">
                    <div className="ant-row row-container">
                      <div className="ant-col">
                        <div>LAM</div>
                        <div>
                          {this.state.player.stats.rating_as.midfield.lam}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>CAM</div>
                        <div>
                          {this.state.player.stats.rating_as.midfield.cam}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>RAM</div>
                        <div>
                          {this.state.player.stats.rating_as.midfield.ram}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ant-row">
                    <div className="ant-row row-container">
                      <div className="ant-col">
                        <div>LM</div>
                        <div>
                          {this.state.player.stats.rating_as.midfield.lm}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>LCM</div>
                        <div>
                          {this.state.player.stats.rating_as.midfield.lcm}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>CM</div>
                        <div>
                          {this.state.player.stats.rating_as.midfield.cm}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>RCM</div>
                        <div>
                          {this.state.player.stats.rating_as.midfield.rcm}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>RM</div>
                        <div>
                          {this.state.player.stats.rating_as.midfield.rm}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ant-row">
                    <div className="ant-row row-container">
                      <div className="ant-col">
                        <div>LWB</div>
                        <div>
                          {this.state.player.stats.rating_as.defence.lwb}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>LDM</div>
                        <div>
                          {this.state.player.stats.rating_as.midfield.ldm}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>CDM</div>
                        <div>
                          {this.state.player.stats.rating_as.midfield.cdm}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>RDM</div>
                        <div>
                          {this.state.player.stats.rating_as.midfield.rdm}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>RWB</div>
                        <div>
                          {this.state.player.stats.rating_as.defence.rwb}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ant-row">
                    <div className="ant-row row-container">
                      <div className="ant-col">
                        <div>LB</div>
                        <div>
                          {this.state.player.stats.rating_as.defence.lb}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>LCB</div>
                        <div>
                          {this.state.player.stats.rating_as.defence.lcb}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>CB</div>
                        <div>
                          {this.state.player.stats.rating_as.defence.cb}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>RCB</div>
                        <div>
                          {this.state.player.stats.rating_as.defence.rcb}
                        </div>
                      </div>
                      <div className="ant-col">
                        <div>RB</div>
                        <div>
                          {this.state.player.stats.rating_as.defence.rb}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ant-row">
                    <div className="ant-row row-container">
                      <div className="ant-col">
                        <div>GK</div>
                        <div>
                          {this.state.player.stats.rating_as.defence.gk}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="ant-col ant-col-6">
              <div className="ratings-analysis-container">
                <h2 className="sub-heading">Base Statistics</h2>
                <div className="ratings-analysis">
                  <img
                    className="soccer-ball"
                    src={soccerBallUrl}
                    alt="football img"
                  />
                  {this.state.player.personal_details.positions === "GK" ? (
                    <div>
                      <div className="base-stat pace">
                        <span className="stat-box">
                          {this.state.player.stats.goalkeeping.diving}
                        </span>{" "}
                        DIV
                      </div>
                      <div className="base-stat shooting">
                        HAN{" "}
                        <span className="stat-box">
                          {this.state.player.stats.goalkeeping.handling}
                        </span>
                      </div>
                      <div className="base-stat passing">
                        KIC{" "}
                        <span className="stat-box">
                          {this.state.player.stats.goalkeeping.kicking}
                        </span>
                      </div>
                      <div className="base-stat defending">
                        <span className="stat-box">
                          {this.state.player.stats.goalkeeping.reflexes}
                        </span>{" "}
                        REF
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="base-stat pace">
                        <span className="stat-box">
                          {this.state.player.stats.generic.pace}
                        </span>{" "}
                        PAC
                      </div>
                      <div className="base-stat shooting">
                        SHO{" "}
                        <span className="stat-box">
                          {this.state.player.stats.generic.shooting}
                        </span>
                      </div>
                      <div className="base-stat passing">
                        PAS{" "}
                        <span className="stat-box">
                          {this.state.player.stats.generic.passing}
                        </span>
                      </div>
                      <div className="base-stat defending">
                        <span className="stat-box">
                          {this.state.player.stats.generic.defending}
                        </span>{" "}
                        DEF
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="player-details ant-col ant-col-18">
              <div className="ant-row">
                <div className="pace ant-col ant-col-6">
                  <h2 className="sub-heading">PACE</h2>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.movement.sprint_speed}
                    </span>
                    <span className="label"> Sprint Speed</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.movement.acceleration}
                    </span>
                    <span className="label"> Acceleration</span>
                  </div>
                </div>
                <div className="shooting ant-col ant-col-6">
                  <h2 className="sub-heading">SHOOTING</h2>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.attacking.finishing}
                    </span>
                    <span className="label"> Finishing</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.defending.positioning}
                    </span>
                    <span className="label"> Positioning</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.attacking.shot_power}
                    </span>
                    <span className="label"> Shot Power</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.attacking.long_shots}
                    </span>
                    <span className="label"> Long Shots</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.skill.penalties}
                    </span>
                    <span className="label"> Penalties</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.attacking.volleys}
                    </span>
                    <span className="label"> Volleys</span>
                  </div>
                </div>
                <div className="passing ant-col ant-col-6">
                  <h2 className="sub-heading">PASSING</h2>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.attacking.finishing}
                    </span>
                    <span className="label"> Vision</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.attacking.crossing}
                    </span>
                    <span className="label"> Crossing</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.skill.fk_accuracy}
                    </span>
                    <span className="label"> FK Accuracy</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.attacking.long_passing}
                    </span>
                    <span className="label"> Long Passing</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.attacking.short_passing}
                    </span>
                    <span className="label"> Short Passing</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.skill.fk_curve}
                    </span>
                    <span className="label"> Curve</span>
                  </div>
                </div>
                <div className="dribbling ant-col ant-col-6">
                  <h2 className="sub-heading">DRIBBLING</h2>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.movement.agility}
                    </span>
                    <span className="label"> Agility</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.movement.balance}
                    </span>
                    <span className="label"> Balance</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.movement.reactions}
                    </span>
                    <span className="label"> Reactions</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.skill.composure}
                    </span>
                    <span className="label"> Composure</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.skill.ball_control}
                    </span>
                    <span className="label"> Ball Control</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.skill.dribbling}
                    </span>
                    <span className="label"> Dribbling</span>
                  </div>
                </div>
              </div>
              <div className="ant-row">
                <div className="defending ant-col ant-col-6">
                  <h2 className="sub-heading">DEFENDING</h2>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.defending.interceptions}
                    </span>
                    <span className="label"> Interceptions</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.attacking.heading_accuracy}
                    </span>
                    <span className="label"> Heading Accuracy</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.defending.marking_awareness}
                    </span>
                    <span className="label"> Defensive Awareness</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.defending.standing_tackle}
                    </span>
                    <span className="label"> Standing Tackle</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.defending.sliding_tackle}
                    </span>
                    <span className="label"> Sliding Tackle</span>
                  </div>
                </div>
                <div className="physical ant-col ant-col-6">
                  <h2 className="sub-heading">PHYSICAL</h2>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.generic.jumping}
                    </span>
                    <span className="label"> Jumping</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.generic.stamina}
                    </span>
                    <span className="label"> Stamina</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.generic.strength}
                    </span>
                    <span className="label"> Strength</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.defending.aggression}
                    </span>
                    <span className="label"> Aggression</span>
                  </div>
                </div>
                <div className="goalkeeping ant-col ant-col-6">
                  <h2 className="sub-heading">GOALKEEPING</h2>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.goalkeeping.diving}
                    </span>
                    <span className="label"> GK Diving</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.goalkeeping.handling}
                    </span>
                    <span className="label"> GK Handling</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.goalkeeping.kicking}
                    </span>
                    <span className="label"> GK Kicking</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.goalkeeping.positioning}
                    </span>
                    <span className="label"> GK Positioning</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-box">
                      {this.state.player.stats.goalkeeping.reflexes}
                    </span>
                    <span className="label"> GK Reflexes</span>
                  </div>
                </div>
                <div className="traits ant-col ant-col-6">
                  <h2 className="sub-heading">TRAITS</h2>
                  {this.loadPlayerSpecialities(
                    this.state.player.stats.generic.traits
                  )}
                  {this.abilityArray.map(this.createPlayerSpecialities)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default PlayersSection;
