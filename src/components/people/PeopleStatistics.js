import React from 'react';
import {Container} from 'semantic-ui-react';

import PieChart from '../templates/PieChart';

const PeopleStats = (props) => {

    const prepareLabels = () => {
        return ['male', 'female', 'machines'];
    }

    const prepareData = () => {
        const males = props.list.reduce((total, x) => (x.gender ==='male'?total+1: total),0)
        const females = props.list.reduce((total, x) => (x.gender ==='female'?total+1: total),0)
        const machines = props.list.reduce((total, x) => (x.gender ==='n/a'?total+1: total),0)

        return [males, females, machines]
    }

    return (
        <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
            <p>People : {props.list.length}</p>
            <PieChart labels={prepareLabels()} data={prepareData()}/>
        </Container>
    )
}

export default PeopleStats;