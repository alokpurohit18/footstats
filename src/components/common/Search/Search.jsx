import * as React from "react";
import "antd/dist/antd.css";
import "./Search.scss";

class Search extends React.Component {
  placeholder;

  constructor(props) {
    super(props);
    this.placeholder = this.props.placeholder;
    this.state = {
      searchResults: [],
    };
  }

  handleSearch = () => {
    let searchString = document.getElementsByClassName("search-bar")[0].value;
    let playerNames = this.props.playerNames;
    var searchResults = [];
    let searchBar = document.getElementsByClassName("search-bar")[0];
    if (searchBar.value.length >= 3) {
      for (let i = 0; i < playerNames.length; i++) {
        if (
          playerNames[i].value
            .toLowerCase()
            .includes(searchString.toLowerCase())
        ) {
          searchResults[searchResults.length] = playerNames[i];
        }
      }

      this.setState({
        searchResults: searchResults,
      });
    }
  };

  displaySearchResults = (searchResult) => {
    return (
      <div key={searchResult.key} className="search-result">
        <button
          onClick={() => this.props.setSourceLink(searchResult.key)}
          className="button"
        >
          {searchResult.label}
        </button>
      </div>
    );
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
        <div className="search-results">
          {this.state.searchResults.map(this.displaySearchResults)}
        </div>
      </div>
    );
  }
}
export default Search;
