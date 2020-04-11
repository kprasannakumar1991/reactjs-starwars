import React from 'react';

import {connect} from 'react-redux';
import {Container, Divider} from 'semantic-ui-react';

import {fetchDataFromServer, fetchPersonFromServer} from '../../actions/index';
import {SINGLE_PERSON}from '../../actions/types';


class PersonCard extends React.Component {

    // props: personUrl, currentPerson, fetchDataFromServer

    componentDidMount() {
        if (!this.props.currentPerson) {
            // fetch the person data from server
            this.props.fetchDataFromServer(SINGLE_PERSON, this.props.personUrl);
        } else {
            // only for testing
            // this will cause duplication of the same person in state.people.results inside the store
            // this.props.fetchPersonFromServer(this.props.currentPerson.url);
        }
    }

    renderPerson = () => {
        if (this.props.currentPerson) {
            return <p>{this.props.currentPerson.name}</p>
        }

    return <p>Loading... {this.props.personUrl}</p>
    }

    render() {
        return (
            <Container style={{margin: '5px'}}>
                {this.renderPerson()}
                <Divider/>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const matchedPeople = state.people.results.filter(p => p.url === ownProps.personUrl);

    return {
        currentPerson: matchedPeople[0]        
    }
}

export default connect(mapStateToProps, {fetchDataFromServer, fetchPersonFromServer})(PersonCard);