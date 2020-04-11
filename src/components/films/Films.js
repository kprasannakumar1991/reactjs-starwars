import React from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';

import {Container, Grid, Divider} from 'semantic-ui-react';
import SearchBar from '../templates/SearchBar';
import SortBlock from '../templates/SortBlock';
import FilmTable from './FilmTable';


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

        this.selectedList = [];
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

        var list = this.props.films;

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

    renderTable = () => {
        this.selectedList = this.filterData();
        return (
            <FilmTable list={this.selectedList}/>
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

    return {films: state.films.results};
}


export default connect(mapStateToProps)(Films);