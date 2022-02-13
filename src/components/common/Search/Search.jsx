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
      document.getElementsByClassName("search-results")[0].style.height =
        "20vw";
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
        console.log(searchResults);
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
              this.props.setSourceLink(searchResult.key);
              this.setState({ searchResults: [] });
              document.getElementsByClassName(
                "search-results"
              )[0].style.height = "0";
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
