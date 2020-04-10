import React from 'react';

import {Container} from 'semantic-ui-react';
import {Doughnut} from 'react-chartjs-2';

const PieChart = (props) => {
    
        const lables = props.labels;
        const datasets =  [
            {
                data: props.data,
                // backgroundColor: ['#edf6fc', '#d0e7f7', '#b3d8f2']
                backgroundColor: ['#ededed', '#dcdcdc', '#cbcbcb'],
                borderWidth: 0.5
            }
        ]
    

        return (
            <Container>
                <Doughnut 
                    data={{
                        labels: lables,
                        datasets: datasets
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

export default PieChart;