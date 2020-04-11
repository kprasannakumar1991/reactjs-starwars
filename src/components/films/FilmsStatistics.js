import React from 'react';
import {Container} from 'semantic-ui-react';

import DoughnutChart  from '../templates/DoughnutChart';

const FilmStatistics = (props) => {

    const prepareLabels = () => {
        return [...new Set(props.list.map(film => film.director))];
    }

    const prepareData = () => {
        var data = []
        var labels = prepareLabels();
        for (var i = 0; i < labels.length; i++) {
            const director = labels[i];
            const count = props.list.reduce((total, film) => (film.director === director? (total+1): total), 0);
            data.push(count);
        }

        return data;
    }

    const renderChartForDirector = () => {
        return (
        <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
            <p>Directors:</p>
            <DoughnutChart labels={prepareLabels()} data={prepareData()}/>
        </Container>
        )
    }

    return (
        <Container>
            {renderChartForDirector()}
        </Container>
        
    )
}

export default FilmStatistics;