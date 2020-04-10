import React from 'react';

import {Container} from 'semantic-ui-react';
import {HorizontalBar} from 'react-chartjs-2';

const BarChart = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

      return (
          <Container>
        <HorizontalBar
                data={data}
                width={100}
                height={200}
                options={{
                    maintainAspectRatio: false
                }}
            />
          </Container>

      )
}

export default BarChart;



