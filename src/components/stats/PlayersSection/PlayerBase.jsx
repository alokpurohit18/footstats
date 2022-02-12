import * as React from "react";
import "antd/dist/antd.css";
import { soccerBallUrl } from "../../../utils/variables.js";

class PlayerBase extends React.Component {
  render() {
    return (
      <div className="player-base ant-col ant-col-6">
        <div className="ratings-analysis-container">
          <h2 className="sub-heading">Base Statistics</h2>
          <div className="ratings-analysis">
            <img
              className="soccer-ball"
              src={soccerBallUrl}
              alt="football img"
            />
            {this.props.player.personal_details.positions === "GK" ? (
              <div>
                <div className="base-stat pace">
                  <span className="stat-box">
                    {this.props.player.stats.goalkeeping.diving}
                  </span>{" "}
                  DIV
                </div>
                <div className="base-stat shooting">
                  HAN{" "}
                  <span className="stat-box">
                    {this.props.player.stats.goalkeeping.handling}
                  </span>
                </div>
                <div className="base-stat passing">
                  KIC{" "}
                  <span className="stat-box">
                    {this.props.player.stats.goalkeeping.kicking}
                  </span>
                </div>
                <div className="base-stat defending">
                  <span className="stat-box">
                    {this.props.player.stats.goalkeeping.reflexes}
                  </span>{" "}
                  REF
                </div>
              </div>
            ) : (
              <div>
                <div className="base-stat pace">
                  <span className="stat-box">
                    {this.props.player.stats.generic.pace}
                  </span>{" "}
                  PAC
                </div>
                <div className="base-stat shooting">
                  SHO{" "}
                  <span className="stat-box">
                    {this.props.player.stats.generic.shooting}
                  </span>
                </div>
                <div className="base-stat passing">
                  PAS{" "}
                  <span className="stat-box">
                    {this.props.player.stats.generic.passing}
                  </span>
                </div>
                <div className="base-stat defending">
                  <span className="stat-box">
                    {this.props.player.stats.generic.defending}
                  </span>{" "}
                  DEF
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default PlayerBase;
