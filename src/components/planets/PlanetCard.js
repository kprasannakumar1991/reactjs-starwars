import React from 'react';

import {connect} from 'react-redux';
import {Container, Divider} from 'semantic-ui-react';

import {fetchDataFromServer} from '../../actions/index';
import {SINGLE_PLANET}from '../../actions/types';

class PlanetCard extends React.Component {

    // props: planetUrl, currentPlanet, fetchDataFromServer

    componentDidMount() {
        if (!this.props.currentPlanet) {
            // fetch the planet data from server
            this.props.fetchDataFromServer(SINGLE_PLANET, this.props.planetUrl);
        }
    }

    renderPlanet = () => {
        if (this.props.currentPlanet) {
            return <p>{this.props.currentPlanet.name}</p>
        }

    return <p>Loading... {this.props.planetUrl}</p>
    }

    render() {
        return (
            <Container style={{margin: '5px'}}>
                {this.renderPlanet()}
                <Divider/>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const matchedPlanets = state.planets.filter(p => p.url === ownProps.planetUrl);

    return {
        currentPlanet: matchedPlanets[0]        
    }
}

export default connect(mapStateToProps, {fetchDataFromServer})(PlanetCard);