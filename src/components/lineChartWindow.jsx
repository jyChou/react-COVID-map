import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChartWindow extends Component {
  state = {};
  
  render() {
    console.log(this.props.id)
    console.log(this.props.data[0].confirm);
    const state_name = this.props.data[this.props.id-1].state_name
    const data = {
        labels: this.props.data[this.props.id-1].date,
        datasets: [
          {
            label: "comfirmed",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.data[this.props.id-1].confirm,
          },
          {
            label: "death",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "rgba(220,20,60,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.data[this.props.id-1].death,
          },
        ],
      }

    return (
      <div
        style={{
          position: "fixed",
          bottom: 15,
          left: 15,
          width: 600,
          height: 350,
          background: "white",
        }}
      >
        <div className="d-flex flex-row align-items-center bg-white">
        <div className="col-sm"> <h6>{state_name}</h6></div>
        <button
            type="button"
            className="close float-right"
            aria-label="Close"
            onClick={this.props.onClick}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div
          style={{
            width: 500,
            height: 300,
            margin: "0 auto"
          }}
        >
          <Line
            data={data}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    );
  }
}

export default LineChartWindow;
