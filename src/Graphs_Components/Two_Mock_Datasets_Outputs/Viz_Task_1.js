import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Red Votes",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgb(255, 99, 132)"
    },
    {
      label: "# of Blue Votes",
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: "rgb(54, 162, 235)"
    },
    {
      label: "# of Green Votes",
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: "rgb(75, 192, 192)"
    }
  ]
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const GroupedBar = () => (
  <>
    <div className="header">
      <h3 className="title">Grouped Bar Chart</h3>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default GroupedBar;
