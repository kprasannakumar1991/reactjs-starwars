import React from 'react';

import {Container} from 'semantic-ui-react';
import {Doughnut} from 'react-chartjs-2';

class PieChart extends React.Component {

    state = {
        lables: ['Films', 'Vehicles', 'Starships'],
        datasets: [
            {
                data: [5, 3, 1],
                // backgroundColor: ['#edf6fc', '#d0e7f7', '#b3d8f2']
                // backgroundColor: ['#ededed', '#dcdcdc', '#cbcbcb'],
                borderWidth: 0.5
            }
        ]
    }

    render() {
        return (
            <Container>
                <Doughnut 
                    data={{
                        labels: this.state.lables,
                        datasets: this.state.datasets
                    }}
                    // height='50%'
                    // width="50%"
                    options = {{
                        animateScale: true,
                        cutoutPercentage: 50,
                        legend: {
                            display: false
                        }
                    }}
                />

            </Container>
        )
    }
}

export default PieChart;