import React from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';

import {Container, Grid, Divider} from 'semantic-ui-react';
import SearchBar from '../templates/SearchBar';
import SortBlock from '../templates/SortBlock';
import PlanetTable from './PlanetTable';
import PlantStats from './PlanetStatistics';
import PlanetStats from './PlanetStatistics';


class Planets extends React.Component {
    
    constructor(props) {
        super(props);

        this.sortOptions = [
            {
                label: "Small \u2192 Big",
                value: "asc"
            },
            {
                label: "Big \u2192 Small",
                value: "desc"
            }
        ]

        this.state = {
            searchString: '',
            sortValue: null
        }

        this.selectedPlanets = [];
    }


    onSearchTextChange  = (text) => {

        this.setState({searchString: text.toLowerCase()})

    }

    onSortDataSelected = (title, value) => {
        if(title === 'Planet Size') {
            this.setState({
                sortValue: value
            });
        }
    }
    
    filterData = () => {

        var list = _.filter(this.props.planets, (p) => {
            // filter based on search string
            const nameMatched =  p.name.toLowerCase().includes(this.state.searchString);
            
            return nameMatched;

        });

        list = list.map(e => {
            e.diameter = parseInt(e.diameter)
            return e;
        });

        if(this.state.sortValue) {
            list = _.orderBy(list, ['diameter'],[this.state.sortValue])
        }

        return list;
    }
   
    renderSelectionOptions = () => {
        return (
                <Container>
                    <SearchBar onSearchTextChange={this.onSearchTextChange} placeholder="Search planet by name"/>
                    <SortBlock title="Planet Size" elements={this.sortOptions} onSortDataSelected={this.onSortDataSelected}/>
                </Container>
        )
    }

    renderTable = () => {
        this.selectedPlanets = this.filterData();
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
            <p>{`Total ${this.selectedPlanets.length} found`}</p>
                 <Divider horizontal/>
                 <PlanetTable list={this.selectedPlanets} />
            </Container>
        )
    }
    
    renderStatistics = () => {
        return (
            <Container>
                <PlanetStats list={this.selectedPlanets}/>
            </Container>
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

    return {planets: state.planets};
}


export default connect(mapStateToProps)(Planets);