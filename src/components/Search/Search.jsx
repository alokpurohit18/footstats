import * as React from "react";
import "antd/dist/antd.css";
import { appLogo, appName } from "../../variables";

class Search extends React.Component {
  placeholder;
  settings;

  constructor(props) {
    super(props);
    this.placeholder = this.props.placeholder;
    this.settings = this.props.settings;
  }

  render() {
    return (
      <div className="search-container ant-row">
        <input
          className="search-bar ant-col ant-col-8"
          type="search"
          placeholder={this.placeholder}
        />
        <div className="search-icon ant-col ant-col-2">🔍</div>
      </div>
    );
  }
}
export default Search;
