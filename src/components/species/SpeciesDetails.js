import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Grid, Header, Container} from 'semantic-ui-react';

import {FILMS, PEOPLE} from '../../utils/resourceTypes';

import ResourceContainer from '../templates/ResourceContainer';

class SpeciesDetails extends React.Component {

    renderBasicInformation = () => {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                <Header as='h3'>
                    {this.props.species.name}
                </Header>
                <strong>URL:</strong>
                <br/>
                {this.props.location.state.url}
                <br/>
                <br/>
                <strong>Classification:</strong>
                <br/>
                {this.props.species.classification}
                <br/>
                <br/>
                <strong>Avg. Height:</strong>
                <br/>
                {this.props.species.average_height}
                <br/>
                <br/>
                <strong>Language:</strong>
                <br/>
                {this.props.species.language}
                <br/>
                <br/>
            </Container>   
        )
    }

    render() {
        const species = this.props.species;

        return (
            <Container>
                <Header as='h2'>
                    Species details:
                </Header>
                <Grid>
                    <Grid.Column width={4}>
                        {this.renderBasicInformation()} 
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer list={species[FILMS]} type={FILMS} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer list={species[PEOPLE]} type={PEOPLE} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                    </Grid.Column>
                </Grid>    
            </Container>
                        
        )

    }
}

const mapStateToProps = (state, ownProps) => {

    // this data is coming from Link payload
    const currentSpeciesUrl = ownProps.location.state.url;

    const species = state.species.results.filter(planet => planet.url === currentSpeciesUrl);

    return {
        species: species[0],
    };
}
export default (withRouter(connect(mapStateToProps)(SpeciesDetails)));