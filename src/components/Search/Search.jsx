import * as React from "react";
import "antd/dist/antd.css";
import "./Search.scss";

class Search extends React.Component {
  placeholder;
  searchIcon;

  constructor(props) {
    super(props);
    this.placeholder = this.props.placeholder;
    this.searchIcon = this.props.searchIcon;
  }

  handleSearch = () => {};

  render() {
    return (
      <div className="search-container ant-row">
        <input
          className="search-bar ant-col ant-col-24"
          type="search"
          placeholder={this.placeholder}x
          onChange={this.handleSearch}
        />
        <div className="search-icon ant-col ant-col-4">{this.searchIcon}</div>
      </div>
    );
  }
}
export default Search;
