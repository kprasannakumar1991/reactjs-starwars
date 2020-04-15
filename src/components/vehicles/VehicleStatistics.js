import React from 'react';
import {Container} from 'semantic-ui-react';

import BarChart from '../templates/BarChart';
import PieChart from '../templates/PieChart';

const VehicleStatistics = (props) => {

    const prepareLabels = () => {
        return [...new Set(props.list.map(v => v.vehicle_class))];
    }

    const prepareData = () => {
        let data = []
        let labels = prepareLabels();
        for (let i = 0; i < labels.length; i++) {
            const vehicleClass = labels[i];
            const count = props.list.reduce((total, v) => (v.vehicle_class === vehicleClass? (total+1): total), 0);
            data.push(count);
        }

        return data;
    }


    const prepareLabelsForSpeed = () => {
        return props.list.map(v => v.name);
    }

    const prepareDataForSpeed = () => {
        return props.list.map(v => v.speed);
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

export default VehicleStatistics;