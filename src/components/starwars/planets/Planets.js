import React from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';

import {Container, Grid, Divider} from 'semantic-ui-react';
import SearchBar from '../../SearchBar';
import SortBlock from '../../SortBlock';
import PlanetTable from './Table';


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
   
    renderTable = () => {
        const list = this.filterData();
        return (
            <Container>
                 <p>{`Total ${list.length} found`}</p>
                 <Divider horizontal/>
                 <PlanetTable list={list} />
            </Container>
        )
    }
    
    render() {

        return (
            <Grid>
                <Grid.Column width={4}>
                    <Container>
                        <SearchBar onSearchTextChange={this.onSearchTextChange} placeholder="Search planet by name"/>
                        <SortBlock title="Planet Size" elements={this.sortOptions} onSortDataSelected={this.onSortDataSelected}/>
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

    return {planets: state.planets};
}


export default connect(mapStateToProps)(Planets);