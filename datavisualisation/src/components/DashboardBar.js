import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

const databar = {
  labels: ["2015", "2016", "2017", "2018", "2019"],
  datasets: [
    {
      label: "NASA",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: []
    },
    {
      label: "ESA",
      backgroundColor: "rgba(100,19,12,0.2)",
      borderColor: "rgba(25,19,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(55,259,132,0.4)",
      hoverBorderColor: "rgba(55,12,132,1)",
      data: []
    }
  ]
};

export default class DashboardBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      databar1: databar
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
      <div>
        <div class='col-md-6'>
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
    );
  }
}
