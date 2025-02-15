import React, { Component } from "react";
import Fade from "react-reveal";
import Benoit_Resume from "../PDFs/Benoit_Resume.pdf";
import Benoit_Transcript from "../PDFs/Transcript_JONATHANBENOIT.pdf";
import background from "../images/Back.jpg"

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "../public/images/profilepic.jpg";
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    // const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div style={{backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"}}>
            <div className="row">
              <div className="three columns">
              <br /> <br /> <br /> <br /> <br />
                <img
                  
                  className="profile-pic"
                  src={profilepic}
                  alt="Profile Pic"
                />
              </div>
              <div className="nine columns main-col">
                <h2><br /> <br /><br /><br /> <br />About Me</h2>

                <p>{bio}</p>
                <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                      <span>{name}</span>
                      <br />
                      <span>
                        {/* {street} */}
                        {/* <br /> */}
                        {city}, {state} {/*zip */}
                      </span>
                      {/* <br />
                      <span>{phone}</span>
                      <br /> */}
                      <span>{email}</span>
                    </p>
                  </div>
                  <div className="columns download">
                    <p>
                      <a href={Benoit_Resume} className="button" >
                        <i className="fa fa-download"></i>Download Resume
                      </a>
                      <a href={Benoit_Transcript} className="button">
                        <i className="fa fa-download"></i>Download Transcript
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
