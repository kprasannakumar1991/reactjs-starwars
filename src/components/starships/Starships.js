import React from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';

import {Container, Grid} from 'semantic-ui-react';
import SearchBar from '../templates/SearchBar';
import StarshipsTable from './StarshipsTable';


class Starships extends React.Component {
    
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

        var list = this.props.starships;

        if (this.state.searchString) {
            list = _.filter(this.props.starships, (ship) => {
                // filter based on search string
                const nameMatched =  ship.name.toLowerCase().includes(this.state.searchString);
                
                return nameMatched;
    
            });
        }
        
        return list;
    }
   
    renderSelectionOptions = () => {
        return (
                <Container>
                    <SearchBar onSearchTextChange={this.onSearchTextChange} placeholder="Search starship by name"/>
                </Container>
        )
    }

    renderTable = () => {
        this.selectedList = this.filterData();
        return (
            <StarshipsTable list={this.selectedList}/>
        )
    }
    
    renderStatistics = () => {
        return (
            <Container>
                
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

    return {starships: state.starships.results};
}


export default connect(mapStateToProps)(Starships);