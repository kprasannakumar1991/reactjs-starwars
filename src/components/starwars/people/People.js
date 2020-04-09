import React from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';

import {Container, Grid, Divider} from 'semantic-ui-react';
import SearchBar from '../../SearchBar';
import FilterBlock from '../../FilterBlock';
import SortBlock from '../../SortBlock';
import PeopleTable from './Table';

class People extends React.Component {

    constructor(props) {
        super(props);

        this.sortOptions = [
            {
                label: "Less to More",
                value: "asc"
            },
            {
                label: "More to Less",
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
   
    renderTable = () => {
        const list = this.filterPeopleData();
        return (
            <Container>
                 <p>{`Total ${list.length} found`}</p>
                 <Divider horizontal/>
                 <PeopleTable list={list} />
            </Container>
        )
    }
    
    render() {

        return (
            <Grid>
                <Grid.Column width={4}>
                    <Container>
                        <SearchBar onSearchTextChange={this.onSearchTextChange} placeholder="Search people by name"/>
                        <FilterBlock title="Gender" elements={this.filterOptions} onFilterDataChanged={this.onFilterDataChanged}/>
                        <SortBlock title="Films" elements={this.sortOptions} onSortDataSelected={this.onSortDataSelected}/>
                    </Container>
                    
                </Grid.Column>
                <Grid.Column width={12}>
                    {this.renderTable()}
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = state => {

    return {people: state.people};
}

export default connect(mapStateToProps)(People);