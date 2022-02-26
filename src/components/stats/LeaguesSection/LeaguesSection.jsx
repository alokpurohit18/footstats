import * as React from "react";
import "antd/dist/antd.css";
import LoadAPI from "../../../utils/LoadAPI.jsx";

class LeaguesSection extends React.Component {
  render() {
    return (
      <div className="leagues-section-main">
        <LoadAPI url="/league_details" sourceLink="none" setData={null} />
      </div>
    );
  }
}
export default LeaguesSection;
