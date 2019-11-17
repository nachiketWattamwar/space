import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

import './comparison.css';

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

let budgetCompData = {
  labels: ["2016", "2017", "2018", "2019"],
  datasets: [
    {
      label: "nasa",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,62,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: ["rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,100,11,1)"],
      pointBackgroundColor: "#fff",
      pointBorderWidth: [1,1,1,1,1,1,1,5],
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: [2,2,2,2,2,2,2,5],
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: "isro",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: ["rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,100,11,1)"],
      pointBackgroundColor: "#fff",
      pointBorderWidth: [1,1,1,1,1,1,1,5],
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: [2,2,2,2,2,2,2,5],
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};

export default class Star extends Component {
  constructor(props) {
    super(props);
    this.background = "/img/comparison/background2.jpg";
    this.nasa= "/img/comparison/nasa.jpg";
    this.isro= "/img/comparison/isro.jpg";
    this.csa= "/img/comparison/csa.jpg";
    this.roscosmos= "/img/comparison/roscosmos.png";

    this.state = { 
      data1: budgetCompData,
      dataMissions: myData,
      databar1: databar
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/nasabudget`).then(res => {
      budgetCompData.datasets[0].data = res.data[0];
      
      console.log("=================nasa budget========", res.data);
      this.setState({
        data1: budgetCompData
      });
    });

    axios.get(`http://localhost:3001/isrobudget`).then(res => {
      budgetCompData.datasets[1].data = res.data[0];
     
      console.log("=================isro budget========", res.data);
      this.setState({
        data1: budgetCompData
      
      });
    });
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
      <div class="bod" >
      <h1 class="dash-name"> Comparison Dashboard</h1>
      <hr class="my-4"/>
      <div class="dash-background">
      < div class="row">
            <div class="col-md-6 ">
            <Bar
              data={this.state.databar1}
              width='700px'
              height='200px'
              options={{
                scales: {
                  xAxes: [
                    {
                      barThickness: 36, // number (pixels) or 'flex'
                      maxBarThickness: 50 // number (pixels)
                    }
                  ]
                },
                responsive: true,
                maintainAspectRatio: true
              }}
            />
            </div>
            <div class="col-md-6 ">
            <Bar
              data={this.state.databar1}
              width='700px'
              height='200px'
              options={{
                scales: {
                  xAxes: [
                    {
                      barThickness: 36, // number (pixels) or 'flex'
                      maxBarThickness: 50 // number (pixels)
                    }
                  ]
                },
                responsive: true,
                maintainAspectRatio: true
              }}
            />
            </div>

</div>
< div class="row">
            <div class="col-md-6 ">
            <Bar
              data={this.state.databar1}
              width='700px'
              height='200px'
              options={{
                scales: {
                  xAxes: [
                    {
                      barThickness: 36, // number (pixels) or 'flex'
                      maxBarThickness: 50 // number (pixels)
                    }
                  ]
                },
                responsive: true,
                maintainAspectRatio: true
              }}
            />
            </div>
            <div class="col-md-6 ">
            <Bar
              data={this.state.databar1}
              width='700px'
              height='200px'
              options={{
                scales: {
                  xAxes: [
                    {
                      barThickness: 36, // number (pixels) or 'flex'
                      maxBarThickness: 50 // number (pixels)
                    }
                  ]
                },
                responsive: true,
                maintainAspectRatio: true
              }}
            />
            </div>

</div>
      </div>

       <br/>  
     < h1 class="dash-name"> Top Agencies</h1>
     <hr class="my-4"/>
       <div class="container cardimage">




  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
{/* <ol class="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
</ol> */}
<div class="carousel-inner carousel">
<div class="carousel-item active">

<img src={this.nasa} class="logo" />
</div>
<div class="carousel-item">
<img src={this.isro} class="logo" />
</div>
<div class="carousel-item">
<img src={this.csa} class="logo" />
</div> 
<div class="carousel-item">
<img src={this.roscosmos} class="logo" />
</div> 
</div>


<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>


</div>    
  </div>
      
      {/*End .bod*/}
      </div>


    );
  }
  }
