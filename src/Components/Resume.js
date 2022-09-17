import React, { Component } from "react";
import Slide from "react-reveal";
import Thesis from "./Modeling_Estuary_Scale_Climate_Change__Narragansett_Bay_Under_RCP_8_5.pdf";
import Effluent_Paper from "./Contextualizing Thermal Effluent Impacts in Narragansett Bay Using Landsat-Derived Surface Temperature.pdf"
import Waterspout_Poster from "./AGU_Waterspouts_Poster_Benoit.pdf"
import ImgEffluent from "./IMGEffluent.jpg"
import ImgThesis from "./OSOM_Warming.jpg"
import ImgSpouts from "./Waterspouts.jpg"

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;

    // var Education = this.props.data.education
    // var $list = query.Education['School'];
    // var json = JSON.parse(Education);

    const education = (<><div key={"Resolving Estuary-Scale Climate Change"}>
                        <img src={ImgThesis} />
                        <h3>{"Resolving Estuary-Scale Climate Change"}</h3>
                        <p className="info">
                          {"Senior Thesis"} <span>&bull;</span>
                          <em className="date">{"Fall 2021 - Spring 2022"}</em>
                        </p>
                        <p>{"Using an application of the Regional Ocean Modeling System (ROMS) to Narragasett Bay, I simulated the effects of present and projected climatic warming in the region. Results indicate that local impact are distinct from regional impacts and that climate change is making Narragansett Bay more density stratified, which increases the estuary's suseptibility to hypoxia. This work was judged to be a Highly Commended entry to the Global Undergraduate Awards."}</p>
                        <div className="download">
                        <p>
                        <a href={Thesis} className="button"> <i className="fa fa-download"></i> {"Download Senior Thesis"} </a>
                        </p>
                        </div>
                      </div>

                      <div key={"Contextualizing Thermal Effluent"}>
                        <img src={ImgEffluent} />
                        <h3>{"Contextualizing Thermal Effluent"}</h3>
                        <p className="info">
                          {"Undergraduate Researcher"} <span>&bull;</span>
                          <em className="date">{"Spring 2019 - Spring 2022"}</em>
                        </p>
                        <p>{"Using satellite data, I conducted a post-impact analysis assessing the effect of thermal effluent (heated water) released from the Brayton Point Power Station into Narragansett Bay. I converted infrared imagery to surface temperature measurements from over 500 Landsat scenes, creating a temperature record of Narragansett Bay for the past 40 years. While the removal of the power station initially cooled the region, climatic warming over the same period has caused the entirety of Narragansett Bay to warm to the same degree as was of concern near the power station. This work culminated in a publication I lead authored in Fronteirs in Marine Science."}</p>
                        <div className="download">
                        <p>
                        <a href={Effluent_Paper} className="button"> <i className="fa fa-download"></i> {"Download Publication"} </a>
                        </p>
                        </div>
                      </div>

                      <div key={"Predicting Waterspout Favorability"}>
                        <img src={ImgSpouts} />
                        <h3>{"Predicting Waterspout Favorability"}</h3>
                        <p className="info">
                          {"Ernest F. Hollings Scholar"} <span>&bull;</span>
                          <em className="date">{"Summer 2021 - Spring 2022"}</em>
                        </p>
                        <p>{"During my time working at the National Oceanic and Atmospheric Administration (NOAA) as a Hollings Scholar, I developed a machine learning algorithm to predict waterspout favorability in the Florida Keys, a region that recieves a waterspout on average about every 5 days during the summer. Reanalysis data from ERA5 was used to train and validate the model, providing insights on what large-scale meterology contributes to local waterspout favorability and exceeding past predictibility. I presented this work at the American Geophysical Union in 2021 and American Meterological Society in 2022."}</p>
                        <div className="download">
                        <p>
                        <a href={Waterspout_Poster} className="button"> <i className="fa fa-download"></i> {"Download AGU/AMS Poster"} </a>
                        </p>
                        </div>
                      </div>

                      <div key={"Validating Ocean Models"}>
                        <h3>{"Validating Ocean Models"}</h3>
                        <p className="info">
                          {"Summer Undergraduate Research Fellowship (SURF)"} <span>&bull;</span>
                          <em className="date">{"Summer 2019"}</em>
                        </p>
                        <p>{"Working in Dr. Baylor Fox-Kemper's ocean modeling research group, I assessed the skill of the Ocean State Ocean Model (OSOM) by comparing to buoy and satellite data. I also worked on a machine learning algorithm to help speed up data cleaning of buoy data."}</p>
                        <div className="download">
                        <p>
                      
                      
                        <a href={""} className="button"> <i className="fa fa-download"></i> {"Download SURF Poster"} </a>
                        </p>
                        </div>
                      </div>
                      </>
                      )

    // const education = this.props.data.education.map(function (education) {
     
    //   return (
        
    //     <div key={education.school}>
    //       <h3>{education.school}</h3>
    //       <p className="info">
    //         {education.degree} <span>&bull;</span>
    //         <em className="date">{education.graduated}</em>
    //       </p>
    //       <p>{education.description}</p>
    //       <div className="download">
    //       <p>
          
          
    //       <a href={""} className="button"> <i className="fa fa-download"></i> {education.download} </a>
    //       </p>
    //       </div>
    //     </div>
        
    //   );
    // });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Scientific Research</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Field Experiences</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        {/* <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Data Visualization</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide> */}

        {/* <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide> */}
      </section>
    );
  }
}

export default Resume;
