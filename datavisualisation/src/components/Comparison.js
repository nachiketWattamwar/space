import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {HorizontalBar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';

import './comparison.css';

import { FaWind, FaSnowflake, FaMountain } from 'react-icons/fa';
import { IoIosSnow, IoMdPlanet } from 'react-icons/io';
import { MdTimelapse } from 'react-icons/md';

const horizontaldata = {
  labels: ['NASA', 'CNSA', 'ROSCOSMOS', 'JAXA','UKSA', 'ISRO','CASA'],
  datasets: [
    {
      label: "Number of Satellites",
      backgroundColor: ['rgb(128,0,0,0.9)','rgb(178, 34,34,0.9)','rgb(165, 42,42,0.9)','rgb(178, 34, 34,0.8)','rgb(220, 20, 60,0.9)','rgb(255, 99, 71)','rgb(240, 128, 128)'],
      borderColor: 'rgba(0,0,255,0.6)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0,0,255,0.3)',
      hoverBorderColor: 'rgba(0,0,255,0.3)',
      data: [830,280,147,75,54,54,37]
    }
  ]
};

const doughnutdata = {
	labels: [
		'Commercial',
		'Civil',
    'Mixed uses',
    'Military',
    'Government'
	],
	datasets: [{
		data: [846,145,279,302,385],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
    '#FFCE56',
    '#66CC00',
    '#7F00FF',
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
    '#FFCE56',
    '#66CC00',
    '#7F00FF'
		]
	}]
};


const databar = {
  labels: ["NASA", "ISRO", "ROSCOSMOS", "ESA"],
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

let spacewalkData = {
  labels: ['1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014',
  '2015','2016','2017','2018','2019'],
  datasets: [
    {
      label: "NASA",
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
      // data: [3,1,9,13,14,2,5,4,11,20,16,14,12,7,3,5,3,6,3,9,5,3]
      data: [3,4,12,25,39,41,46,50,61,81,97,111,123,130,133,138,141,147,150,157,160,163]
    },
    
    {
      label: "ROSCOSMOS",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(58,115,19,0.6)",
      borderColor: "rgba(58,115,19,0.6)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: ["rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,100,11,1)"],
      pointBackgroundColor: "#fff",
      pointBorderWidth: [1,1,1,1,1,1,1,5],
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(58,115,19,0.8)",
      pointHoverBorderColor: "rgba(58,115,19,0.8)",
      pointHoverBorderWidth: [2,2,2,2,2,2,2,5],
      pointRadius: 1,
      pointHitRadius: 10,
      // data: [0,0,0,5,4,0,5,3,3,3,3,3,3,3,2,6,4,1,1,1,3,0]
      data: [0,0,0,5,9,0,14,17,20,23,26,29,32,35,37,43,47,48,49,50,53,53]
    }
  ]
};
let budgetCompData = {
  labels: ["2016", "2017", "2018", "2019"],
  datasets: [
    {
      label: "NASA",
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
      label: "ISRO",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(255,0,0,0.7)",
      borderColor: "rgba(255,0,0,0.7)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: ["rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,100,11,1)"],
      pointBackgroundColor: "#fff",
      pointBorderWidth: [1,1,1,1,1,1,1,5],
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255,0,0,0.5)",
      pointHoverBorderColor: "rgba(255,0,0,0.5)",
      pointHoverBorderWidth: [2,2,2,2,2,2,2,5],
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: "ROSCOSMOS",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(58,115,19,0.6)",
      borderColor: "rgba(58,115,19,0.6)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: ["rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,100,11,1)"],
      pointBackgroundColor: "#fff",
      pointBorderWidth: [1,1,1,1,1,1,1,5],
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(58,115,19,0.8)",
      pointHoverBorderColor: "rgba(58,115,19,0.8)",
      pointHoverBorderWidth: [2,2,2,2,2,2,2,5],
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    },
    {
      label: "ESA",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(255,0,255,0.7)",
      borderColor: "rgba(255,0,255,0.7)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: ["rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,100,11,1)"],
      pointBackgroundColor: "#fff",
      pointBorderWidth: [1,1,1,1,1,1,1,5],
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255,0,255,0.5)",
      pointHoverBorderColor: "rgba(255,0,255,0.5)",
      pointHoverBorderWidth: [2,2,2,2,2,2,2,5],
      pointRadius: 1,
      pointHitRadius: 10,
      data: [5000,5800,6200,6406]
    },
    {
      label: "CNSA",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgb(169,169,169)",
      borderColor: "rgb(169,169,169)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: ["rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,192,192,0.4)","rgba(75,100,11,1)"],
      pointBackgroundColor: "#fff",
      pointBorderWidth: [1,1,1,1,1,1,1,5],
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(128,128,128)",
      pointHoverBorderColor: "rgb(128,128,128)",
      pointHoverBorderWidth: [2,2,2,2,2,2,2,5],
      pointRadius: 1,
      pointHitRadius: 10,
      data: [7200,7800,8100,8400]
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
      databar1: databar,
      horizontaldata:horizontaldata,
      doughnutdata:doughnutdata,
      spacewalkData:spacewalkData
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

    axios.get(`http://localhost:3001/rosbudget`).then(res => {
      budgetCompData.datasets[1].data = res.data[0];
      
      console.log("=================ros budget========", res.data);
      this.setState({
        data1: budgetCompData
      });
    });


    axios.get(`http://localhost:3001/isrobudget`).then(res => {
      budgetCompData.datasets[2].data = res.data[0];
     
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
      
      <div class="bod-dash" >
      <h1 class="dash-name "> Comparison Dashboard</h1>
      <hr class="my-4"/>
      <div>
      < div class="row">
      <div class="col-md-4 tilepad">
      <div class=" pad " >
      <div class="dash-background"> 
      <Line
            data={spacewalkData}
           
            options={{
              scales: {
                xAxes: [
                  {
                    barThickness: 15, // number (pixels) or 'flex'
                    maxBarThickness: 15, // number (pixels)
                    gridLines: {
                      display:false,
                     
                  }
                     }]
                  }
                ,
                yAxes: [{
                  gridLines: {
                      display:false,
                   
                  } 
                }]  
              ,
              responsive: true,
              maintainAspectRatio: true
              
            }}
          />
            <div class="dash-text">Total spacewalks from 1998 to 2019</div></div>
           
            </div></div>
            <div class="col-md-4 tilepad">
      <div class=" pad " >
      <div class="dash-background"> 
      <Bar
              data={this.state.databar1}
          
              options={{
                scales: {
                  xAxes: [
                    {
                      barThickness: 20, // number (pixels) or 'flex'
                      maxBarThickness: 30 // number (pixels)
                    }
                  ]
                },
                responsive: true,
                maintainAspectRatio: true
              }}
            />
            <div class="dash-text">Success and Failure of satellite launches</div>
          </div>
          
           </div></div>

                 <div class="col-md-4 tilepad">
      <div class=" pad " >
      <div class="dash-background"> 
      <Line
            data={this.state.data1}
           
            options={{
              scales: {
                xAxes: [
                  {
                    barThickness: 15, // number (pixels) or 'flex'
                    maxBarThickness: 15, // number (pixels)
                    gridLines: {
                      display:false,
                     
                  }
                     }]
                  }
                ,
                yAxes: [{
                  gridLines: {
                      display:false,
                   
                  } 
                }]  
              ,
              responsive: true,
              maintainAspectRatio: true
              
            }}
          />
           <div class="dash-text">Last 4 year budgets of space agencies</div></div>
           
            </div></div>
            
</div>
< div class="row">
      <div class="col-md-6 tilepad">
      <div class=" pad " >
      <div class="dash-background"> 
      
         <HorizontalBar 
      
      data={horizontaldata}
      width='300px'
      height='120px'
      options={{
        scales: {
          xAxes: [
            {
              barThickness: 15, // number (pixels) or 'flex'
              maxBarThickness: 15, // number (pixels)
              gridLines: {
                display:false
            }
               }]
            }
          ,
          yAxes: [{
            gridLines: {
                display:false
            } 
          }]  
        ,
        responsive: true,
        maintainAspectRatio: true
        
      }}
    />
            <div class="dash-text">Space agencies with most active satellites in space</div>
            </div>
            
            </div></div>

                 <div class="col-md-6 tilepad">
      <div class=" pad " >
      <div class="dash-background"> 
      <Doughnut data={doughnutdata}
        width='300px'
        height='120px'
        options={{
          responsive: true,
          maintainAspectRatio: true,
          cutoutPercentage: 70,
          
        }}


      />


    <div class="dash-text">How the active 1957 satellites are being used </div>
          </div>
           </div></div>
            </div>
      </div>
   
      {/*End .bod*/}
      </div>


    );
  }
  }
