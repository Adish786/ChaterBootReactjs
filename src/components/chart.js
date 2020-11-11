import React, { useEffect } from 'react';
import Chart from "chart.js";

const ContractPieChart = ({ topic, likelihood, intensity, relevance }) => {
  useEffect(() => {
    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myPie = new Chart(ctx, getConfig())
  })

  function getConfig() {
    var config = {
      type: 'radar',
      data: {
        labels: topic,
        datasets: [{
          label: 'Likelihood',
          borderColor: 'rgba(255, 99, 132, 0.8)',
          fill: false,
          data: likelihood
        },{
          label: 'Intensity',
          borderColor: 'rgba(54, 162, 235, 0.8)',
          fill: false,
          data: intensity
        },{
          label: 'Relevance',
          borderColor: 'rgba(100, 170, 75, 0.8)',
          fill: false,
          data: relevance
        }]
      },
      options: {
        responsive: true,
        hoverMode: 'index',
        stacked: false
      }
    };
    return config;
  }
  return (
    <canvas id="chart-area"></canvas>
  )
}

export default ContractPieChart;
