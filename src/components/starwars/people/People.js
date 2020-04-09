import React from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';

import {Container, Grid, Button, Form, Checkbox} from 'semantic-ui-react';
import SearchBar from '../../SearchBar';
import PeopleTable from './Table';

class People extends React.Component {

    state = {
        searchString: '', 
        genders: ['male', 'female', 'n/a'],
        sortingFilms: null
        }

    onSearchTextChange  = (text) => {

        this.setState({searchString: text.toLowerCase()})

    }

    onGenderClicked = (gender) => {

        const existingGenders = this.state.genders;

       if (_.includes(existingGenders, gender)) {
                // remove the gender from the state 
                _.remove(existingGenders, (g) => g === gender);
       } else{
           // add the gender from the state
           existingGenders.push(gender);

       }

       this.setState({genders: existingGenders})
    }

    onFilmsSortingClicked = (event, {value}) => {
        // event.preventDefault();
        
        console.log(value);
        this.setState({
            sortingFilms: value
        });
    }

    styleFilterButton = (gender) => {
        if (_.includes(this.state.genders, gender)) {
            return 'secondary color="black"' // selected
        } else {
            return 'basic color="black"'; // not selected
        }
    }
    renderFilterButtons = () => {
        return (
            <div style={{backgroundColor: '#f6f6f6', padding: '20px'}} >
                <p><strong>Gender:</strong></p>
                <Button className={this.styleFilterButton('male')}  onClick={()=>this.onGenderClicked('male')} size="tiny">Male</Button>
                <Button className={this.styleFilterButton('female')}   onClick={()=>this.onGenderClicked('female')} size="tiny">Female</Button>
                <Button className={this.styleFilterButton('n/a')}   onClick={()=>this.onGenderClicked('n/a')} size="tiny">N/A</Button>
            </div>
        )
    }

    renderSortingOptions = () => {

        return (
            <div style={{backgroundColor: '#f6f6f6', padding: '20px'}} >

            <Form>
                <Form.Field>
                <p><strong>Films:</strong></p>
                </Form.Field>
                <Form.Field>
                <Checkbox
                    radio
                    label='Less &rarr; More'
                    name='checkboxRadioGroup'
                    value='less'
                    checked={this.state.sortingFilms === 'less'}
                    onChange={this.onFilmsSortingClicked}
                />
                </Form.Field>
                <Form.Field>
                <Checkbox
                    radio
                    label='More &rarr; Less'
                    name='checkboxRadioGroup'
                    value='more'
                    checked={this.state.sortingFilms === 'more'}
                    onChange={this.onFilmsSortingClicked}
                />
                </Form.Field>
            </Form>
      </div>
        )
    }

    applyOperation = () => {
        var list = _.filter(this.props.people, (p) => {
            
            const passNameFilter =  p.name.toLowerCase().includes(this.state.searchString)
            const passGenderFilter = _.indexOf(this.state.genders, p.gender) >= 0 ? true: false;

            return passNameFilter && passGenderFilter;
        })

        if (this.state.sortingFilms) {
            const order = this.state.sortingFilms === 'less'? 'asc':'desc';
            list = _.orderBy(list, ['films.length'],[order])
        }

        return list;
    }

    renderTable = () => {
        const list = this.applyOperation();
        return (
            <PeopleTable list={list} />
        )
    }
    
    render() {
        return (
            <Grid>
                <Grid.Column width={4}>
                    <Container>
                        <br/>
                        <SearchBar 
                            onSearchTextChange={this.onSearchTextChange}
                            placeholder="Search people by name"/>
                        <br/>
                        <br/>
                        {this.renderFilterButtons()}
                        <br/>
                        {this.renderSortingOptions()}
                        <br/>
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