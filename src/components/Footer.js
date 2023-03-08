import React, { Component } from "react";
import resume from "../moreassets/Linus_Huynh_Resume.pdf"

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">
            {networks}
            <span className="m-4">
                  <a href={resume} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-file-user" />
                  </a>
            </span>
            <span className="m-4" >
              <a href="mailto:linusmhuynh@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope" />
                <span style={{ fontSize: "13px", marginLeft: "5px" }}>linusmhuynh@gmail.com</span>
              </a>
            </span>
          </div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}

              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
