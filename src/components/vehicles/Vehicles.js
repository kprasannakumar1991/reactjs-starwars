import React from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';

import {Container, Grid} from 'semantic-ui-react';
import SearchBar from '../templates/SearchBar';
import VehiclesTable from './VehiclesTable';
import VehicleStatistics from './VehicleStatistics'


class Vehicles extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
        }

        this.selectedList = [];
    }


    onSearchTextChange  = (text) => {

        this.setState({searchString: text.toLowerCase()})

    }

    filterData = () => {

        var list = this.props.vehicles;

        if (this.state.searchString) {
            list = _.filter(this.props.vehicles, (vehicle) => {
                // filter based on search string
                const nameMatched =  vehicle.name.toLowerCase().includes(this.state.searchString);
                
                return nameMatched;
    
            });
        }
        
        return list;
    }
   
    renderSelectionOptions = () => {
        return (
                <Container>
                    <SearchBar onSearchTextChange={this.onSearchTextChange} placeholder="Search vehicle by name"/>
                </Container>
        )
    }

    renderTable = () => {
        this.selectedList = this.filterData();
        return (
            <VehiclesTable list={this.selectedList}/>
        )
    }
    
    renderStatistics = () => {
        return (
            <VehicleStatistics list={this.selectedList} />
        )
    }
    render() {
        return (
            <Grid>
                <Grid.Column width={4}>
                    {this.renderSelectionOptions()}
                </Grid.Column>
                <Grid.Column width={8}>
                    {this.renderTable()}
                </Grid.Column>
                <Grid.Column width={4}>
                {this.renderStatistics()}
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = state => {

    return {vehicles: state.vehicles.results};
}


export default connect(mapStateToProps)(Vehicles);