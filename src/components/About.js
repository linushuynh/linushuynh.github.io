import React, { Component } from "react";
import { Icon } from "@iconify/react";
import pythonIcon from "@iconify/icons-logos/python";
import reactIcon from "@iconify/icons-logos/react";
import flaskIcon from "@iconify/icons-logos/flask";
import resume from "../moreassets/Linus_Huynh_Resume_2_7_23.pdf"

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center" >
              <div className="polaroid">
                <span style={{ cursor: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img
                    height="fit-content"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <div style={{ display: "flex",  justifyContent: "center", gap: "5px" }}>

                  <Icon
                    icon={pythonIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                  {/* <Icon
                    icon={javascriptIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    /> */}
                  <Icon
                    icon={flaskIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header" style={{ userSelect: "none" }}>
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {about}
                    <br />
                    <br />
                    <h2>
                      Contact me at:
                    </h2>
                    <h3>
                      <a href="mailto:linusmhuynh@gmail.com" style={{ color: "#41B46C" }}>
                        <i className="fas fa-envelope" target="_blank" rel="noopener noreferrer"/><span style={{ marginLeft: "0.5rem" }}>linusmhuynh@gmail.com</span>
                      </a>
                    </h3>
                    <br />
                    <h2>
                      My Links:
                    </h2>
                    <div id="about-links">
                      <a href="https://github.com/linushuynh" target="_blank" rel="noopener noreferrer" style={{ color: "#41B46C" }}>
                        <i className="fab fa-github" />
                        <span style={{ marginLeft: "0.5rem" }}>Github</span>
                      </a>
                      <a href="https://www.linkedin.com/in/linus-huynh/" target="_blank" rel="noopener noreferrer" style={{ color: "#41B46C" }}>
                        <i className="fab fa-linkedin"/>
                        <span style={{ marginLeft: "0.5rem" }}>LinkedIn</span>
                      </a>
                      <a href={resume} target="_blank" rel="noopener noreferrer" style={{ color: "#41B46C" }}>
                        <i className="fas fa-file-user"/>
                        <span style={{ marginLeft: "0.6rem" }}>Resume</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
