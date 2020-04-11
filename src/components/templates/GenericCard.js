import React from 'react';

import {connect} from 'react-redux';
import {Container, Divider} from 'semantic-ui-react';

import {fetchDataFromServer} from '../../actions/index';
import * as TYPES from '../../actions/types';


// GenericCard needs 2 props to be passed from parent compnent.
// resourceType and resourceUrl
class GenericCard extends React.Component {

    // props: resourceUrl, resourceType, currentResource, fetchDataFromServer

    componentDidMount() {
        if (!this.props.currentResource) {
            this.props.fetchDataFromServer(this.props.resourceType, this.props.resourceUrl);
        }
    }

    renderResource = () => {
        if (this.props.currentResource) {
            if (this.props.resourceType === TYPES.SINGLE_FILM) {
                console.log('rendering...title ' + this.props.currentResource.title);
                console.log('rendering...director' + this.props.currentResource.director);
                console.log('rendering...film ' + JSON.stringify(this.props.currentResource));


                return <p>{this.props.currentResource.title}</p>
            } else {
                return <p>{this.props.currentResource.name}</p>
            }
        }

    return <p>Loading... {this.props.resourceUrl}</p>
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

    const resourceType = ownProps.resourceType;
    const resourceUrl = ownProps.resourceUrl;
    var resources;

    switch (resourceType) {
        case TYPES.SINGLE_PERSON:
            resources = state.people.results.filter(item => item.url === resourceUrl);
            break;
        case TYPES.SINGLE_PLANET:
            resources = state.planets.results.filter(item => item.url === resourceUrl);
            break;
        case TYPES.SINGLE_FILM:
            resources = state.films.results.filter(item => item.url === resourceUrl);
            break;
        case TYPES.SINGLE_SPECIES:
            resources = state.species.results.filter(item => item.url === resourceUrl);
            break;
        case TYPES.SINGLE_STARSHIP:
            resources = state.starships.results.filter(item => item.url === resourceUrl);
            break;
        case TYPES.SINGLE_VEHICLE:
            resources = state.vehicles.results.filter(item => item.url === resourceUrl);
            break;
         default:
             return null;
                
    }

    return {
        currentResource : resources[0]       
    }
}

export default connect(mapStateToProps, {fetchDataFromServer})(GenericCard);