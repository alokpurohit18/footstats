import * as React from "react";
import "antd/dist/antd.css";
import "./Search.scss";
import LoadAPI from "../../../utils/LoadAPI.jsx";

class Search extends React.Component {
  placeholder;

  constructor(props) {
    super(props);
    this.placeholder = this.props.placeholder;
    this.state = {
      searchResults: [],
      searchBoxValue: "",
    };
  }

  handleSearch = () => {
    let searchString = document.getElementsByClassName("search-bar")[0].value;
    let playerNames = this.props.playerNames;
    var searchResults = [];
    let searchBar = document.getElementsByClassName("search-bar")[0];
    if (searchBar.value.length >= 3) {
      for (let i = 0; i < playerNames.length; i++) {
        if (playerNames[i].value.includes(searchString)) {
          searchResults[searchResults.length] = playerNames[i].label;
        }
      }

      this.setState({
        searchResults: searchResults,
      });
    }
  };

  displaySearchResults = (searchResult) => {
    return (
      <div key={searchResult} className="search-result">
        {searchResult}
      </div>
    );
  };

  render() {
    return (
      <div className="search-container ant-row">
        {this.state.apiLoaded ? null : (
          <LoadAPI
            url="/playerDetails"
            sourceLink={1}
            setData={this.props.setData}
          />
        )}
        <input
          className="search-bar ant-col ant-col-24"
          type="search"
          placeholder={this.placeholder}
          onChange={this.handleSearch}
        />
        <div className="search-results">
          {this.state.searchResults.map(this.displaySearchResults)}
        </div>
      </div>
    );
  }
}
export default Search;
