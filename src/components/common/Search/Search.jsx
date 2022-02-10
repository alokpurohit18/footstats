import * as React from "react";
import "antd/dist/antd.css";
import "./Search.scss";
import LoadAPI from "../../../utils/LoadAPI.jsx";

class Search extends React.Component {
  placeholder;
  searchIcon;

  constructor(props) {
    super(props);
    this.placeholder = this.props.placeholder;
    this.searchIcon = this.props.searchIcon;
    this.state = {
      searchBoxValue: "",
      searchResults: [],
    };
  }

  handleSearch = () => {
    let searchBar = document.getElementsByClassName("search-bar")[0];
    if (searchBar.value.length >= 3) {
      return <div>{this.props.playerNames[0]}</div>;
    }
  };

  render() {
    return (
      <div className="search-container ant-row">
        {this.state.apiLoaded ? null : (
          <LoadAPI
            url="/playerDetails"
            sourceLink={12}
            setData={this.props.setData}
          />
        )}
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
