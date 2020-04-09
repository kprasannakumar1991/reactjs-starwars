import React from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';

import {List, Button} from 'semantic-ui-react';
import SearchBar from '../SearchBar';

class People extends React.Component {

    state = {searchString: '', genders: ['male', 'female', 'n/a']}

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

    styleFilterButton = (gender) => {
        if (_.includes(this.state.genders, gender)) {
            return 'secondary color="black"' // selected
        } else {
            return 'basic color="black"'; // not selected
        }
    }
    renderFilterButtons = () => {
        return (

            <div>
                Filter by:
                <br/>
                <Button className={this.styleFilterButton('male')}  onClick={()=>this.onGenderClicked('male')} size="tiny">Male</Button>
                <Button className={this.styleFilterButton('female')}   onClick={()=>this.onGenderClicked('female')} size="tiny">Female</Button>
                <Button className={this.styleFilterButton('n/a')}   onClick={()=>this.onGenderClicked('n/a')} size="tiny">N/A</Button>
            </div>

        )
    }
    renderPeopleList = () => {
        const list = _.filter(this.props.people, (p) => {
            
            const passNameFilter =  p.name.toLowerCase().includes(this.state.searchString)
            const passGenderFilter = _.indexOf(this.state.genders, p.gender) >= 0 ? true: false;

            return passNameFilter && passGenderFilter;
        })

        return list.map(people => {
            return (
                <List.Item key={people.url}>
                    <List.Header>{people.name}</List.Header>
                     {people.gender}
                </List.Item>
            )
        })
    }
    
    render() {
        return (
            <div>
                People list
                <br/>
                <SearchBar onSearchTextChange={this.onSearchTextChange} />
                <br/>
                <br/>
                {this.renderFilterButtons()}
                <br/>
                <List>
                    {this.renderPeopleList()}
                </List>
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {people: state.people};
}

export default connect(mapStateToProps)(People);