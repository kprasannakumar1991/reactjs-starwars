import React from 'react';

import {connect} from 'react-redux';
import {Container, Divider, Label, Dimmer} from 'semantic-ui-react';

import {fetchDataFromServer} from '../../actions/index';
import {
    PEOPLE,
    CHARACTERS,
    PILOTS,
    RESIDENTS,
    FILMS,
    PLANETS,
    SPECIES,
    STARSHIPS,
    VEHICLES
} from '../../utils/resourceTypes';

/* 
    ResourceCard needs 2 props to be passed from parent compnent.
    type and url
 */

class ResourceCard extends React.Component {

    // props: url, type, currentResource, fetchDataFromServer

    state = {
        loadingInProgress: false
    }

    componentDidMount() {
        if (!this.props.currentResource && !this.state.loadingInProgress) {
            this.setState({loadingInProgress: true})
            this.props.fetchDataFromServer(this.props.resourceType, this.props.resourceUrl);
        }
    }

    renderResource = () => {
        if (this.props.currentResource) {
            if (this.props.type === FILMS) {
                return <p>{this.props.currentResource.title}</p>
            } else {
                return <p>{this.props.currentResource.name}</p>
            }
        }
        
        return <Label basic color="grey" size="tiny">{`Loading... ${this.props.url}`}</Label>
    }

    render() {
        return (
            <Container style={{margin: '5px'}}>
                {this.renderResource()}
                <Divider/>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const resourceType = ownProps.type;
    const resourceUrl = ownProps.url;

    var resources = [];

    if (resourceType === PEOPLE || resourceType === CHARACTERS || resourceType === PILOTS || resourceType === RESIDENTS) {
        resources = state.people.results.filter(item => item.url === resourceUrl);
    } else if (resourceType === PLANETS) {
        resources = state.planets.results.filter(item => item.url === resourceUrl);
    } else if (resourceType === FILMS) {
        resources = state.films.results.filter(item => item.url === resourceUrl);
    } else if (resourceType === SPECIES) {
        resources = state.species.results.filter(item => item.url === resourceUrl);
    } else if (resourceType === STARSHIPS) {
        resources = state.starships.results.filter(item => item.url === resourceUrl);
    } else if (resourceType === VEHICLES) {
        resources = state.vehicles.results.filter(item => item.url === resourceUrl);
    }
    
    return {
        currentResource : resources.length > 0 ? resources[0]: undefined       
    }
}

export default connect(mapStateToProps, {fetchDataFromServer})(ResourceCard);