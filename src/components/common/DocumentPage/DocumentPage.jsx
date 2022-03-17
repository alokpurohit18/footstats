import * as React from "react";
import "antd/dist/antd.css";

class DocumentPage extends React.Component {
  loadDocument = () => {
    if (this.props.shiftFlag) {
      return (
        <img
          className="document"
          alt={this.props.heading}
          src={this.props.source}
        />
      );
    } else {
      return (
        <iframe
          className="document"
          title={this.props.heading}
          src={this.props.source}
          allow="autoplay"
        ></iframe>
      );
    }
  };

  render() {
    return (
      <div className="document-page-main">
        <h2>{this.props.heading}</h2>
        <div className="document-container">
          {this.loadDocument()}
        </div>
      </div>
    );
  }
}
export default DocumentPage;
