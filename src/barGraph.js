import React from "react";
import ReactApexChart from "react-apexcharts";

const BarGraph = () => {
  const series = [{
    data: [10, 20, 50, 40]
  }];

  const options = {
    chart: {
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#FF0000"],
    grid: {
      borderColor: "#f1f1f1",
    },
    xaxis: {
      categories: ["Value 1", "Value 2", "Value 3", "Value 4"],
    },
    
    animations: {
      enabled: true, 
      easing: 'easeinout', 
      speed: 1000, 
      animateGradually: {
        enabled: true,
        delay: 300 
      }
    }
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={500}
      />
    </React.Fragment>
  );
};

export default BarGraph;
