import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import ArchImg from "./07.jpg";
import DataImg from "./04.jpg";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;


    const projects = (<> <div key={id++} className="columns portfolio-item">
                      <div className="item-wrap">
                          <Zmage alt={"Data Sonification"} src={DataImg}/>
                          <div style={{ textAlign: "center" }}>{<a href={"https://www.youtube.com/watch?v=Kb01eM7laDg"}>Data Sonification</a>}</div>
                        
                        </div>
                      </div>
                      
                      <div key={id++} className="columns portfolio-item">
                      <div className="item-wrap">
                          <Zmage alt={"Field Archeology"} src={ArchImg}/>
                          <div style={{ textAlign: "center" }}>{<a href={"https://www.facebook.com/archofcollegehill"}>Field Archeology</a>}</div>
                        
                        </div>
                      </div>
                      </>);
    // const projects = this.props.data.projects.map(function (projects) {
    //   let projectImage = "images/portfolio/" + projects.image;

    //   return (
    //     <div key={id++} className="columns portfolio-item">
    //       <div className="item-wrap">
    //         <Zmage alt={projects.title} src={projectImage}/>
    //         <div style={{ textAlign: "center" }}>{<a href={"www.google.com"}>AAA</a>}</div>
            
    //       </div>
    //     </div>
    //   );
    // });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Gallery</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
