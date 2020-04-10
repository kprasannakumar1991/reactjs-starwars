import React from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';

import {Container, Grid, Divider} from 'semantic-ui-react';
import SearchBar from '../templates/SearchBar';
import FilterBlock from '../templates/FilterBlock';
import SortBlock from '../templates/SortBlock';
import PeopleTable from './PeopleTable';
import PeopleStats from './PeopleStatistics';

class People extends React.Component {

    constructor(props) {
        super(props);

        this.sortOptions = [
            {
                label: "Less \u2192 More",
                value: "asc"
            },
            {
                label: "More \u2192 Less",
                value: "desc"
            }
        ]

        this.filterOptions = [
            {
                label: 'Male',
                value: 'male',
                active: true 
             },
             {
                label: 'Female',
                value: 'female',
                active: true 
             }, 
             {
                label: 'N/A',
                value: 'n/a',
                active: true 
             }
        ]

        this.state = {
            searchString: '',
            genders: [],
            sortingFilms: null
        }

        this.selectedPeople = [];
    }


    onSearchTextChange  = (text) => {
        this.setState({searchString: text.toLowerCase()})
    }

    onFilterDataChanged = (title, elements) => {
        if (title === 'Gender') {
            this.setState({genders: elements})
        }
    }

    onSortDataSelected = (title, value) => {
        if(title === 'Films') {
            this.setState({
                sortingFilms: value
            });
        }
    }

    filterPeopleData = () => {

        var list = _.filter(this.props.people, (p) => {
            // filter based on search string
            const nameMatched =  p.name.toLowerCase().includes(this.state.searchString);

            // filter based on Gender selection
            var genderMatched = true;
            if (this.state.genders.length > 0) {
                genderMatched = this.state.genders.some(e => ((e.value === p.gender) && e.active));

            }

            return nameMatched && genderMatched;

        });

        if(this.state.sortingFilms) {
            list = _.orderBy(list, ['films.length'],[this.state.sortingFilms])
        }

        return list;
    }
   
    renderSelectionOptions = () => {
        return (
            <Container>
                <SearchBar onSearchTextChange={this.onSearchTextChange} placeholder="Search people by name"/>
                <FilterBlock title="Gender" elements={this.filterOptions} onFilterDataChanged={this.onFilterDataChanged}/>
                <SortBlock title="Films" elements={this.sortOptions} onSortDataSelected={this.onSortDataSelected}/>
            </Container>
        )
    }

    renderTable = () => {
        this.selectedPeople = this.filterPeopleData();
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
            <p>{`Total ${this.selectedPeople.length} found`}</p>
                 <Divider horizontal/>
                 <PeopleTable list={this.selectedPeople} />
            </Container>
        )
    }

    renderStatistics = () => {        
        return (
            <Container>
                <PeopleStats list={this.selectedPeople}/>
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

    return {people: state.people};
}

export default connect(mapStateToProps)(People);