import React from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';

import {Container, Grid} from 'semantic-ui-react';
import SearchBar from '../templates/SearchBar';
import SortBlock from '../templates/SortBlock';
import VehiclesTable from './VehiclesTable';
import VehicleStatistics from './VehicleStatistics'


class Vehicles extends React.Component {
    
    constructor(props) {
        super(props);

        this.sortOptions = [
            {
                label: "Low \u2192 High",
                value: "asc"
            },
            {
                label: "High \u2192 Low",
                value: "desc"
            }
        ]

        this.state = {
            searchString: '',
            sortValue: null
        }
    }


    onSearchTextChange  = (text) => {
        this.setState({searchString: text.toLowerCase()})
    }

    onSortDataSelected = (title, value) => {
        if(title === 'Speed') {
            this.setState({
                sortValue: value
            });
        }
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

        // need to convert speed type from string to Int
        list = list.map(e => {
            const speedInStr = e.max_atmosphering_speed.split('km')[0];
            if (isNaN(speedInStr)) {
                e.speed = 0;
            } else {
                e.speed = parseInt(e.max_atmosphering_speed)
            }
  
            return e;
        });

        if(this.state.sortValue) {
            list = _.orderBy(list, ['speed'],[this.state.sortValue])
        }

        return list;
    }
   
    renderSelectionOptions = () => {
        return (
                <Container>
                    <SearchBar onSearchTextChange={this.onSearchTextChange} placeholder="Search vehicle by name"/>
                    <SortBlock title="Speed" elements={this.sortOptions} onSortDataSelected={this.onSortDataSelected}/>
                </Container>
        )
    }

    renderTable = (list) => {
        return (
            <VehiclesTable list={list}/>
        )
    }
    
    renderStatistics = (list) => {
        return (
            <VehicleStatistics list={list} />
        )
    }
    render() {
        const filteredList = this.filterData();

        return (
            <Grid>
                <Grid.Column width={4}>
                    {this.renderSelectionOptions()}
                </Grid.Column>
                <Grid.Column width={8}>
                    {this.renderTable(filteredList)}
                </Grid.Column>
                <Grid.Column width={4}>
                {this.renderStatistics(filteredList)}
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = state => {

    return {vehicles: state.vehicles.results};
}


export default connect(mapStateToProps)(Vehicles);