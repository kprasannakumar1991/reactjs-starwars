import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Grid, Header, Container} from 'semantic-ui-react';

import {RESIDENTS, FILMS} from '../../utils/resourceTypes';

import ResourceContainer from '../templates/ResourceContainer';

class PlanetDetails extends React.Component {

    renderBasicInformation = () => {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                <Header as='h3'>
                    {this.props.planet.name}
                </Header>
                <strong>URL:</strong>
                <br/>
                {this.props.location.state.url}
                <br/>
                <br/>
                <strong>Population:</strong>
                <br/>
                {this.props.planet.population}
                <br/>
                <br/>
                <strong>Size:</strong>
                <br/>
                {this.props.planet.diameter}
                <br/>
                <br/>
                <strong>Climate:</strong>
                <br/>
                {this.props.planet.climate}
                <br/>
                <br/>
                <strong>Terrain:</strong>
                <br/>
                {this.props.planet.terrain}

            </Container>   
        )
    }

    render() {
        return (
            <Container>
                <Header as='h2'>
                    Planet details:
                </Header>
                <Grid>
                    <Grid.Column width={4}>
                        {this.renderBasicInformation()} 
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer parent={this.props.planet} child={RESIDENTS} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer parent={this.props.planet} child={FILMS} />
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
    const currentPlanetUrl = ownProps.location.state.url;

    const planets = state.planets.results.filter(planet => planet.url === currentPlanetUrl);

    return {
        planet: planets[0],
    };
}
export default (withRouter(connect(mapStateToProps)(PlanetDetails)));