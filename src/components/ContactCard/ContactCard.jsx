import * as React from "react";
import "antd/dist/antd.css";

class ContactCard extends React.Component {
  cardInfo;

  constructor(props) {
    super(props);
    this.cardInfo = this.props.cardInfo;
  }

  loadSocialIcon = (src, href) => {
    return (
      <div className="ant-col">
        <a href={href} target="_blank" rel="noreferrer">
          <img className="social-icon" alt="contact card media" src={src} />
        </a>
      </div>
    );
  };

  render() {
    return (
      <div className="contact-card-main ant-row">
        <img
          className="contact-image ant-col ant-col-8"
          alt="contact card media"
          src={this.cardInfo.photo}
        />
        <div className="contact-detail ant-col ant-col-16">
          <h3 className="card-title">{this.cardInfo.name}</h3>
          <div className="card-description">
            <div>
              <span className="info-key">Affiliation: </span>
              {this.cardInfo.affiliation}
            </div>
            <div>
              <span className="info-key">Email Id: </span>
              {this.cardInfo.links.email}
            </div>
            <div>
              <span className="info-key">Phone No:</span>
              {this.cardInfo.links.phone}
            </div>
            <div className="ant-row">
              {this.loadSocialIcon(
                "https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png",
                this.cardInfo.links.linkedin
              )}
              {this.loadSocialIcon(
                "https://www.kindpng.com/picc/m/255-2558173_github-logo-png-transparent-png.png",
                this.cardInfo.links.github
              )}
              {this.loadSocialIcon(
                "https://png.pngtree.com/png-vector/20190302/ourlarge/pngtree-vector-portfolio-icon-png-image_735701.jpg",
                this.cardInfo.links.website
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactCard;
