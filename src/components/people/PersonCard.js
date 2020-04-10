import React from 'react';

import {connect} from 'react-redux';
import {Container, Divider} from 'semantic-ui-react';

import {fetchPerson} from '../../actions/index';

class PersonCard extends React.Component {

    // props: personUrl, currentPerson, fetchPerson

    componentDidMount() {
        if (!this.props.currentPerson) {
            // fetch the person data from server
            this.props.fetchPerson(this.props.personUrl);
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

    const matchedPeople = state.people.filter(p => p.url === ownProps.personUrl);

    return {
        currentPerson: matchedPeople[0]        
    }
}

export default connect(mapStateToProps, {fetchPerson})(PersonCard);