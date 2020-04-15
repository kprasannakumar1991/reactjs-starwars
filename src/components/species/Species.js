import React from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';

import {Container, Grid} from 'semantic-ui-react';
import SearchBar from '../templates/SearchBar';
import SpeciesTable from './SpeciesTable';
import SpeciesStatistics from './SpeciesStatistics';


class Species extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
        }
    }


    onSearchTextChange  = (text) => {
        this.setState({searchString: text.toLowerCase()})
    }

    filterData = () => {
        var list = this.props.species;

        if (this.state.searchString) {
            list = _.filter(this.props.species, (s) => {
                // filter based on search string
                const nameMatched =  s.name.toLowerCase().includes(this.state.searchString);
                
                return nameMatched;
    
            });
        }
        
        return list;
    }
   
    renderSelectionOptions = () => {
        return (
                <Container>
                    <SearchBar onSearchTextChange={this.onSearchTextChange} placeholder="Search species by name"/>
                </Container>
        )
    }

    renderTable = (list) => {
        return (
            <SpeciesTable list={list}/>
        )
    }
    
    renderStatistics = (list) => {
        return (
            <SpeciesStatistics list={list}/>
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

    return {species: state.species.results};
}


export default connect(mapStateToProps)(Species);