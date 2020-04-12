import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Grid, Header, Container} from 'semantic-ui-react';

import {FILMS, PILOTS} from '../../utils/resourceTypes';

import ResourceContainer from '../templates/ResourceContainer';

class StarshipDetails extends React.Component {

    renderBasicInformation = () => {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                <Header as='h3'>
                    {this.props.starship.name}
                </Header>
                <strong>URL:</strong>
                <br/>
                {this.props.location.state.url}
                <br/>
                <br/>
                <strong>Model:</strong>
                <br/>
                {this.props.starship.model}
                <br/>
                <br/>
                <strong>Class:</strong>
                <br/>
                {this.props.starship.starship_class}
                <br/>
                <br/>
                <strong>Length:</strong>
                <br/>
                {this.props.starship.length}
                <br/>
                <br/>
                <strong>Max speed:</strong>
                <br/>
                {this.props.starship.max_atmosphering_speed}
                <br/>
                <br/>
                <strong>Crew:</strong>
                <br/>
                {this.props.starship.crew}
                <br/>
                <br/>
                <strong>Passengers:</strong>
                <br/>
                {this.props.starship.passengers}
                <br/>
                <br/>
                <strong>Cargo:</strong>
                <br/>
                {this.props.starship.cargo_capacity}
                
            </Container>   
        )
    }

    render() {
        return (
            <Container>
                <Header as='h2'>
                    Starship details:
                </Header>
                <Grid>
                    <Grid.Column width={4}>
                        {this.renderBasicInformation()} 
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer parent={this.props.starship} child={FILMS} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer parent={this.props.starship} child={PILOTS} />
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
    const currentShipUrl = ownProps.location.state.url;

    const ships = state.starships.results.filter(ship => ship.url === currentShipUrl);

    return {
        starship: ships[0],
    };
}
export default (withRouter(connect(mapStateToProps)(StarshipDetails)));