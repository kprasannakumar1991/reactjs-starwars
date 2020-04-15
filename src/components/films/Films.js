import React from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';

import {Container, Grid} from 'semantic-ui-react';
import SearchBar from '../templates/SearchBar';
import SortBlock from '../templates/SortBlock';
import FilmTable from './FilmTable';
import FilmStatistics from './FilmsStatistics';


class Films extends React.Component {
    
    constructor(props) {
        super(props);

        this.sortOptions = [
            {
                label: "Oldest \u2192 Newest",
                value: "asc"
            },
            {
                label: "Newest \u2192 Oldest",
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
        if(title === 'Release date') {
            this.setState({
                sortValue: value
            });
        }
    }
    
    filterData = () => {

        let list = this.props.films;

        if (this.state.searchString) {
            list = _.filter(this.props.films, (film) => {
                // filter based on search string
                const nameMatched =  film.title.toLowerCase().includes(this.state.searchString);
                
                return nameMatched;
    
            });
        }
        
        if(this.state.sortValue) {
            list = list.map(film => {
                film.release_date_timestamp = new Date(film.release_date).getTime();
                return film;
            });
            
            list = _.orderBy(list, ['release_date_timestamp'],[this.state.sortValue])
        }

        return list;
    }
   
    renderSelectionOptions = () => {
        return (
                <Container>
                    <SearchBar onSearchTextChange={this.onSearchTextChange} placeholder="Search movie by name"/>
                    <SortBlock title="Release date" elements={this.sortOptions} onSortDataSelected={this.onSortDataSelected}/>
                </Container>
        )
    }

    renderTable = (list) => {
        return (
            <FilmTable list={list}/>
        )
    }
    
    renderStatistics = (list) => {
        return (
            <FilmStatistics list={list}/>
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

    return {films: state.films.results};
}


export default connect(mapStateToProps)(Films);