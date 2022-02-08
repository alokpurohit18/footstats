import * as React from "react";
import "antd/dist/antd.css";

class DocumentPage extends React.Component {
  render() {
    return (
      <div className="document-page-main">
        <h2>{this.props.heading}</h2>
        <div className="document-container">
          <iframe
            className="document"
            title={this.props.heading}
            src={this.props.source}
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    );
  }
}
export default DocumentPage;
