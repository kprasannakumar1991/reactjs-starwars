import React from 'react';
import {Container} from 'semantic-ui-react';

import PieChart from '../templates/PieChart';

const PeopleStats = (props) => {
    return (
        <Container style={{backgroundColor: '#f6f6f6', padding: '20px', margin:'20px'}}>
        {props.name}

        <PieChart />
        </Container>
    )
}

export default PeopleStats;