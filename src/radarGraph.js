// import React from "react";
// import ReactApexChart from "react-apexcharts";

// const RadarGraph = () => {
//     const series = [{
//         name: "Series 1",
//         data: [10, 20, 50, 40],
//       }];
//     const options = {   
//         chart: {
//         toolbar: {
//           show: !1
//         }
//       },
//       stroke: {
//           colors:["#038edc"]
//       },
//       xaxis: {
//         categories: ["Value 1", "Value 2", "Value 3", "Value 4"]
//       }
//       };

//   return (
//     <React.Fragment>
//       <ReactApexChart
//         options={options}
//         series={series}
//         type="radar"
//         height={500}
//       />
//     </React.Fragment>
//   );
// };

// export default RadarGraph;

import React from "react";
import ReactApexChart from "react-apexcharts";

const RadarGraph = () => {
    const series = [{
        name: "Series 1",
        data: [10, 20, 50, 40],
    }];
    
    const options = {   
        chart: {
            toolbar: {
                show: false
            }
        },
        stroke: {
            colors:["#FF0000"]
        },
        xaxis: {
            categories: ["Value 1", "Value 2", "Value 3", "Value 4"]
        },
        plotOptions: {
            radar: {
                polygons: {
                    strokeColor: '#e8e8e8',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        
        animations: {
            enabled: true, 
            easing: 'easeinout', 
            speed: 1000 
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                type="radar"
                height={500}
            />
        </React.Fragment>
    );
};

export default RadarGraph;

