import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Grid, Header, Container} from 'semantic-ui-react';

import {FILMS, PILOTS} from '../../utils/resourceTypes';

import ResourceContainer from '../templates/ResourceContainer';

class VehicleDetails extends React.Component {

    renderBasicInformation = () => {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                <Header as='h3'>
                    {this.props.vehicle.name}
                </Header>
                <strong>URL:</strong>
                <br/>
                {this.props.location.state.url}
                <br/>
                <br/>
                <strong>Model:</strong>
                <br/>
                {this.props.vehicle.model}
                <br/>
                <br/>
                <strong>Class:</strong>
                <br/>
                {this.props.vehicle.vehicle_class}
                <br/>
                <br/>
                <strong>Length:</strong>
                <br/>
                {this.props.vehicle.length}
                <br/>
                <br/>
                <strong>Max speed:</strong>
                <br/>
                {this.props.vehicle.max_atmosphering_speed}
                <br/>
                <br/>
                <strong>Crew:</strong>
                <br/>
                {this.props.vehicle.crew}
                <br/>
                <br/>
                <strong>Passengers:</strong>
                <br/>
                {this.props.vehicle.passengers}
                <br/>
                <br/>
                <strong>Cargo:</strong>
                <br/>
                {this.props.vehicle.cargo_capacity}
                
            </Container>   
        )
    }

    render() {
        const vehicle = this.props.vehicle;

        return (
            <Container>
                <Header as='h2'>
                    Vehicle details:
                </Header>
                <Grid>
                    <Grid.Column width={4}>
                        {this.renderBasicInformation()} 
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer list={vehicle[FILMS]} type={FILMS} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer list={vehicle[PILOTS]} type={PILOTS} />
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
    const currentVehicleUrl = ownProps.location.state.url;

    const vehicles = state.vehicles.results.filter(vehicle => vehicle.url === currentVehicleUrl);

    return {
        vehicle: vehicles[0],
    };
}
export default (withRouter(connect(mapStateToProps)(VehicleDetails)));