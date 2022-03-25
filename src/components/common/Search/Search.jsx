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

  handleSearch = (event) => {
    let searchString = event.target.value;
    let playerNames = this.props.playerNames;
    var searchResults = [];
    if (searchString.length >= 3) {
      for (let i = 0; i < playerNames.length; i++) {
        if (
          playerNames[i].value
            .toLowerCase()
            .includes(searchString.toLowerCase())
        ) {
          searchResults[searchResults.length] = playerNames[i];
        }
      }

      if (searchResults.length === 0) {
        searchResults[searchResults.length] = {
          key: "None",
          label: "No Search Results",
          value: "No Search Results",
        };
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
          onClick={() => {
            if (searchResult.key !== "None") {
              if (this.props.callSource === "player_details") {
                this.props.setSourceLink(searchResult.key);
              } else {
                this.props.setSourceLink(searchResult.label);
              }
              this.setState({ searchResults: [] });
            }
          }}
          className="button"
        >
          {searchResult.label}
        </button>
      </div>
    );
  };

  render() {
    return (
      <div key={this.props.id} className="search-container ant-row">
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
