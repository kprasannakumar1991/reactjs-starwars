import React from 'react';
import {Container} from 'semantic-ui-react';

import PieChart from '../templates/PieChart';

const PeopleStats = (props) => {

    const calculateGenders = () => {

        return [...new Set(props.list.map(l => l.gender))];

    }

    const calcualteGenderCount = (list) => {
        const males = props.list.reduce((total, x) => (x.gender ==='male'?total+1: total),0)
        const females = props.list.reduce((total, x) => (x.gender ==='female'?total+1: total),0)
        const machines = props.list.reduce((total, x) => (x.gender ==='n/a'?total+1: total),0)

        return [males, females, machines]
    }

    return (
        <Container style={{backgroundColor: '#f6f6f6', padding: '20px', margin:'20px'}}>
            <p>People : {props.list.length}</p>
        <PieChart labels={['males', 'females', 'machines']} data={calcualteGenderCount()}/>
        </Container>
    )
}

export default PeopleStats;