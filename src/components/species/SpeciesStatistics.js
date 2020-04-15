import React from 'react';
import {Container} from 'semantic-ui-react';

import BarChart from '../templates/BarChart';

const SpeciesStatistics = (props) => {

    const prepareLabels = () => {
        return [...new Set(props.list.map(s => s.classification))];
    }

    const prepareData = () => {
        let data = []
        let labels = prepareLabels();
        for (let i = 0; i < labels.length; i++) {
            const speciesClass = labels[i];
            const count = props.list.reduce((total, s) => (s.classification === speciesClass? (total+1): total), 0);
            data.push(count);
        }

        return data;
    }

    const renderChartForClass = () => {
        return (
        <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
            <p>Class:</p>
            <BarChart labels={prepareLabels()} data={prepareData()}/>
        </Container>
        )
    }

    

    return (
        <Container>
            {renderChartForClass()}
        </Container>
        
    )
}

export default SpeciesStatistics;