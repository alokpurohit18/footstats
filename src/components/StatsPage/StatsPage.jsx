import * as React from "react";
import "antd/dist/antd.css";
import LoadAPI from "../../utils/LoadAPI";

class StatsPage extends React.Component {
  render() {
    return (
      <div className="stats-page-main">
        <h2>Football Stats</h2>
        <div className="ant-row">
          <LoadAPI url="/fifa22" sourceLink="10" />
        </div>
      </div>
    );
  }
}
export default StatsPage;
