import React from 'react';
import {Container} from 'semantic-ui-react';

import BarChart from '../templates/BarChart';
import PieChart from '../templates/PieChart';

const StarshipsStatistics = (props) => {

    const prepareLabels = () => {
        return [...new Set(props.list.map(s => s.starship_class))];
    }

    const prepareData = () => {
        var data = []
        var labels = prepareLabels();
        for (var i = 0; i < labels.length; i++) {
            const shipClass = labels[i];
            const count = props.list.reduce((total, s) => (s.starship_class === shipClass? (total+1): total), 0);
            data.push(count);
        }

        return data;
    }


    const prepareLabelsForSpeed = () => {
        return props.list.map(s => s.name);
    }

    const prepareDataForSpeed = () => {
        return props.list.map(s => s.speed);
    }

    const renderChartForClass = () => {
        return (
        <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
            <p>Class:</p>
            <PieChart labels={prepareLabels()} data={prepareData()}/>
        </Container>
        )
    }

    const renderChartForSpeed = () => {
        return (
        <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
            <p>Speed:</p>
            <BarChart labels={prepareLabelsForSpeed()} data={prepareDataForSpeed()}/>
        </Container>
        )
    }

    return (
        <Container>
            {renderChartForClass()}
            {renderChartForSpeed()}
        </Container>
        
    )
}

export default StarshipsStatistics;