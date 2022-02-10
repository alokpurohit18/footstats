import * as React from "react";
import "antd/dist/antd.css";
import "./Search.scss";
import playerNames from "../../../api/data/playerNames.json";

class Search extends React.Component {
  placeholder;
  searchIcon;

  constructor(props) {
    super(props);
    this.placeholder = this.props.placeholder;
    this.searchIcon = this.props.searchIcon;
  }

  handleSearch = () => {
    let searchBar = document.getElementsByClassName("search-bar")[0];
    if (searchBar.value.length >= 3) {
      console.log(playerNames[0]);
    }
  };

  render() {
    return (
      <div className="search-container ant-row">
        <input
          className="search-bar ant-col ant-col-24"
          type="search"
          placeholder={this.placeholder}
          onChange={this.handleSearch}
        />
        <div className="search-icon ant-col ant-col-4">{this.searchIcon}</div>
      </div>
    );
  }
}
export default Search;
