import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import './Star.css';
import { FaWind, FaSnowflake, FaMountain } from 'react-icons/fa';
import { IoIosSnow, IoMdPlanet } from 'react-icons/io';
import { MdTimelapse } from 'react-icons/md';


const myData = {
  labels: ["United States", "USSR/RUSSIA", "INDIA", "JAPAN", "ESA", "OTHERS"],
  datasets: [
    {
      label: "Success",
      backgroundColor: "rgba(107,180,212,1)",
      borderColor: "rgba(107,180,212,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [16,3,1,0,1,1]
    },
    {
      label: "Failure",
      backgroundColor: "rgba(238,122,39,1)",
      borderColor: "rgba(238,122,39,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(55,259,132,0.4)",
      hoverBorderColor: "rgba(55,12,132,1)",
      data: [6,15,0,1,0,1]
    }
  ]
};


const databar = {
  labels: ["United States", "USSR/RUSSIA", "INDIA", "JAPAN", "ESA", "OTHERS"],
  datasets: [
    {
      label: "Success",
      backgroundColor: "rgba(107,180,212,1)",
      borderColor: "rgba(107,180,212,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [9,8,7,6,5,4]
    },
    {
      label: "Failure",
      backgroundColor: "rgba(238,122,39,1)",
      borderColor: "rgba(238,122,39,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(55,259,132,0.4)",
      hoverBorderColor: "rgba(55,12,132,1)",
      data: [9,8,7,6,5,4]
    }
  ]
};

export default class Star extends Component {
  constructor(props) {
    super(props);
    this.background = "/img/planets/mars.jpg";

    this.state = {
      dataMissions: myData,
      databar1: databar,
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/nasaspacebudget`).then(res => {
      databar.datasets[0].data = res.data;
      console.log("=================res line data========", res.data);
      this.setState({
        databar1: databar
      });
    });

    console.log("inside cododo ");
    axios.get(`http://localhost:3001/europespacebudget`).then(res => {
      databar.datasets[1].data = res.data;
      console.log("=================res line europe data========", res.data);
      this.setState({
        databar1: databar
      });
    });
  }
  render() {
    return (
      <div class="bod" style={{ backgroundImage: `url(${this.background})`}}>
        <div class="row border-div">
          <div class="col-md-6 planet-left">

            <div class="planet-name-div row">
              <h1 class="planet-name col-md-6">
                Mars
              </h1>
            </div>

            <div class="row planet-info-main">

              <div class="col-sm-3 planet-info-1">
                Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet
              </div>

              <div class="col-sm-3 planet-info planet-info-2">
                <div></div>
                <div class="border-left-div">
                  <div class="span-div"><span class="number">55.7</span> TO</div>
                  <div class="span-div"><span class="number">401</span></div>
                  <div class="span-div"><span class="metric">MILLION KILOMETERS</span></div>
                </div>
                <div>Distance from Mars to earth depending on its orbit.</div>
              </div>

              <div class="col-sm-3 planet-info planet-info-3">
                <div></div>
                <div class="border-left-div">
                  <div class="span-div"><span class="number">26</span></div>
                  <div class="span-div"><span class="metric">MONTHS</span></div>
                </div>
                <div> Launch window for Mars from Earth</div>
              </div>
            </div>
          </div>

          <div class="col-md-6 planet-right">

          <ol class="my-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">



              <div class="carousel-inner">

                <div class="carousel-item active">
                  <div class="info-grid-wrapper">
                    <div class="row">

                      <div class="col-sm-4 planet-grid planet-grid-1">
                        <div class="inner-grid-border">
                          <div></div>
                          <div>
                            <div class="span-div"><span class="number">687</span></div>
                            <div class="span-div"><span class="metric">DAYS</span></div>
                          </div>
                          <div>Number of Earth days it takes Mars to make one revolution around Sun.</div>
                        </div>
                      </div>

                      <div class="col-sm-4 planet-grid planet-grid-2">
                        <div class="inner-grid-border">
                          <div>
                            <span class="space-icon"><IoMdPlanet/></span>
                          </div>
                          <div>
                            <div class="span-div"><span class="number">1/10</span>TH</div>
                            <div class="span-div"><span class="metric">MASS OF EARTH</span></div>
                          </div>
                          <div></div>
                        </div>
                      </div>

                      <div class="col-sm-4 planet-grid planet-grid-3">
                        <div class="inner-grid-border">
                          <div>
                            <span class="space-icon"><MdTimelapse/></span>
                          </div>
                          <div>
                            <div class="span-div-small"><span class="number-series-1">24 HOURS</span></div>
                            <div class="span-div-small"><span class="number-series-2">39 MINUITS</span></div>
                            <div class="span-div-small"><span class="number-series-3">35 SECONDS</span></div>
                          </div>
                          <div>Length of 1 Martian day known as 'Sol'</div>
                        </div>
                      </div>

                      <div class="col-sm-4 planet-grid planet-grid-4">
                        <div class="inner-grid-border">
                          <div>
                            <span class="space-icon"><IoIosSnow/></span>
                          </div>
                          <div>
                            <div class="span-div"><span class="number">-55</span></div>
                            <div class="span-div"><span class="metric">DEGREE CELCIUS</span></div>
                          </div>
                          <div>Is the average temperaturre on MARS</div>
                        </div>
                      </div>


                      <div class="col-sm-4 planet-grid planet-grid-5">
                        <div class="inner-grid-border">
                          <div>
                            <span class="space-icon"><FaWind/></span>
                          </div>
                          <div>
                            <div class="span-div"><span class="number">144</span></div>
                            <div class="span-div"><span class="metric">KM/H</span></div>
                          </div>
                          <div>Highest wind speed recorded on Mars.</div>
                        </div>
                      </div>

                      <div class="col-sm-4 planet-grid planet-grid-4">
                        <div class="inner-grid-border">
                          <div>
                            <span class="space-icon"><FaMountain/></span>
                          </div>
                          <div>
                            <div class="span-div"><span class="number">26</span></div>
                            <div class="span-div"><span class="metric">KILOMETERS</span></div>
                          </div>
                          <div>Height of highest known mountain on Mars.</div>
                        </div>
                      </div>





                    {/*End .browser*/}
                    </div>
                  {/*End .info-grid-wrappe*/}
                  </div>
                {/*End .carousel-item active*/}
                </div>

                <div class="carousel-item">
                  <div class="info-grid-wrapper">
                  <Bar
                    data={this.state.dataMissions}
                    width='700px'
                    height='500px'
                    options={{
                      scales: {
                        xAxes: [
                          {
                            barThickness: 20, // number (pixels) or 'flex'
                            maxBarThickness: 50, // number (pixels)
                            gridLines: { color: "rgba(255,255,255,0.2)" },
                            ticks: {  fontColor: "#CCC" },
                          }
                        ],
                        yAxes: [
                          {
                            gridLines: { color: "rgba(255,255,255,0.2)" },
                            ticks: {  fontColor: "#CCC" },
                          }
                        ]
                      },
                      responsive: true,
                      maintainAspectRatio: true
                    }}
                  />
                  </div>

                </div>

              {/*End .carousel-inner*/}
              </div>

            {/*End .border-carousel*/}
            </div>
          {/*End .planet-right*/}
          </div>

        {/*End .border-div*/}
        </div>
      {/*End .bod*/}
      </div>


    );
  }
}
