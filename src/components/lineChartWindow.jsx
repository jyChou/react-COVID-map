import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChartWindow extends Component {
  state = {id : this.props.id};
  
  updateID = (id) => {
    this.setState({id})
  }
  render() {
    //console.log(this.props.id)
    //console.log(this.props.data[0].confirm);
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
            pointBorderColor: "rgba(220,20,60,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(220,20,60,1)",
            pointHoverBorderColor: "rgba(220,20,60,1)",
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
          bottom: 25,
          left: 25,
          width: "60%",
          height: "45%",
          background: "white",
        }}
      >
        <div className="d-flex flex-row align-items-center bg-white">
        <div className="col-sm"> {state_name}</div>
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
            width: "90%",
            height: "90%",
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
