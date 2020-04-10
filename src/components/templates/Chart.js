import React from 'react';
import {Line} from 'react-chartjs-2';

const Chart = (props) => {
    const samples = props.samples;
    const lineData = {
        labels: new Array(samples),
        datasets: [
            {
                label: 'Cpu Usage',
                data: props.cpuValues,
                backgroundColor: "green",
                borderColor:"lightgreen",
                fill: false,
                radius: 2
            },
            {
                label: 'Memory Usage',
                data: props.memoryValues,
                backgroundColor: "blue",
                borderColor:"lightblue",
                fill: false,
                radius: 2
            }
        ]
    }

    return (
            <div className="chart" style={{height: '200px'}}>

            <Line
                  data={lineData}
                  options={{
                      animation: false,
                      scales: {
                          xAxes:[
                            {
                                display: false
                            }
                          ],
                          yAxes:[
                              {
                                  ticks:{
                                      min:0,
                                      max:100,
                                      stepSize:10,
                                      callback: function(value, index, values) {
                                          return value + ' %';
                                      }
                                  }
                              }
                          ]
                      }
                  }}

                />


            </div>
    )
}

export default Chart;
