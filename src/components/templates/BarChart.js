import React from 'react';

import {Container} from 'semantic-ui-react';
import {HorizontalBar} from 'react-chartjs-2';

const BarChart = (props) => {

    const data = {
        labels: props.labels,
        datasets: [
          {
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: props.data
          }
        ]
      };

      return (
          <Container>
        <HorizontalBar
                data={data}
                width={100}
                height={150}
                options={{
                    legend: {
                      display: false
                    },
                    maintainAspectRatio: true,
                    scales: {
                      xAxes:[
                        {
                          display: true
                        }
                      ],
                      yAxes: [
                        {
                          display: true
                        }
                      ]
                    }
                }}
            />
          </Container>

      )
}

export default BarChart;



