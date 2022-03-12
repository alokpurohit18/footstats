import * as React from "react";
import "antd/dist/antd.css";

class PlayerAttributes extends React.Component {
  constructor(props) {
    super(props);
    this.abilityArray = [];
  }

  loadPlayerSpecialities = (specialities) => {
    this.abilityArray = specialities.split(",");
  };

  render() {
    return (
      <div className="player-details ant-col ant-col-18">
        <div className="ant-row">
          <div className="pace ant-col ant-col-6">
            <h2 className="sub-heading">PACE</h2>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.movement.sprint_speed}
              </span>
              <span className="label"> Sprint Speed</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.movement.acceleration}
              </span>
              <span className="label"> Acceleration</span>
            </div>
          </div>
          <div className="shooting ant-col ant-col-6">
            <h2 className="sub-heading">SHOOTING</h2>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.attacking.finishing}
              </span>
              <span className="label"> Finishing</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.defending.positioning}
              </span>
              <span className="label"> Positioning</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.attacking.shot_power}
              </span>
              <span className="label"> Shot Power</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.attacking.long_shots}
              </span>
              <span className="label"> Long Shots</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.skill.penalties}
              </span>
              <span className="label"> Penalties</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.attacking.volleys}
              </span>
              <span className="label"> Volleys</span>
            </div>
          </div>
          <div className="passing ant-col ant-col-6">
            <h2 className="sub-heading">PASSING</h2>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.attacking.finishing}
              </span>
              <span className="label"> Vision</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.attacking.crossing}
              </span>
              <span className="label"> Crossing</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.skill.fk_accuracy}
              </span>
              <span className="label"> FK Accuracy</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.attacking.long_passing}
              </span>
              <span className="label"> Long Passing</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.attacking.short_passing}
              </span>
              <span className="label"> Short Passing</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.skill.fk_curve}
              </span>
              <span className="label"> Curve</span>
            </div>
          </div>
          <div className="dribbling ant-col ant-col-6">
            <h2 className="sub-heading">DRIBBLING</h2>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.movement.agility}
              </span>
              <span className="label"> Agility</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.movement.balance}
              </span>
              <span className="label"> Balance</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.movement.reactions}
              </span>
              <span className="label"> Reactions</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.skill.composure}
              </span>
              <span className="label"> Composure</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.skill.ball_control}
              </span>
              <span className="label"> Ball Control</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.skill.dribbling}
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
                {this.props.player.stats.defending.interceptions}
              </span>
              <span className="label"> Interceptions</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.attacking.heading_accuracy}
              </span>
              <span className="label"> Heading Accuracy</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.defending.marking_awareness}
              </span>
              <span className="label"> Defensive Awareness</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.defending.standing_tackle}
              </span>
              <span className="label"> Standing Tackle</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.defending.sliding_tackle}
              </span>
              <span className="label"> Sliding Tackle</span>
            </div>
          </div>
          <div className="physical ant-col ant-col-6">
            <h2 className="sub-heading">PHYSICAL</h2>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.generic.jumping}
              </span>
              <span className="label"> Jumping</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.generic.stamina}
              </span>
              <span className="label"> Stamina</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.generic.strength}
              </span>
              <span className="label"> Strength</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.defending.aggression}
              </span>
              <span className="label"> Aggression</span>
            </div>
          </div>
          <div className="goalkeeping ant-col ant-col-6">
            <h2 className="sub-heading">GOALKEEPING</h2>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.goalkeeping.diving}
              </span>
              <span className="label"> GK Diving</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.goalkeeping.handling}
              </span>
              <span className="label"> GK Handling</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.goalkeeping.kicking}
              </span>
              <span className="label"> GK Kicking</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.goalkeeping.positioning}
              </span>
              <span className="label"> GK Positioning</span>
            </div>
            <div className="stat-row">
              <span className="stat-box">
                {this.props.player.stats.goalkeeping.reflexes}
              </span>
              <span className="label"> GK Reflexes</span>
            </div>
          </div>
          <div className="traits ant-col ant-col-6">
            <h2 className="sub-heading">TRAITS</h2>
            {this.loadPlayerSpecialities(
              this.props.player.stats.generic.traits
            )}
            {this.abilityArray.map(this.props.createPlayerSpecialities)}
          </div>
        </div>
      </div>
    );
  }
}
export default PlayerAttributes;
