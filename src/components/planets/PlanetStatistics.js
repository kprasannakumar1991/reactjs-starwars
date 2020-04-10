import React from 'react';
import {Container} from 'semantic-ui-react';

import BarChart from '../templates/BarChart';

const PlanetStats = (props) => {

    const prepareLabels = () => {
        return props.list.map(planet => planet.name);
    }

    const prepareData = () => {
        return props.list.map(planet => planet.diameter);
    }

    return (
        <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
            <p>Size:</p>
            <BarChart labels={prepareLabels()} data={prepareData()}/>
        </Container>
    )
}

export default PlanetStats;