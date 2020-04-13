import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Grid, Header, Container} from 'semantic-ui-react';

import {FILMS, STARSHIPS, SPECIES} from '../../utils/resourceTypes';

import ResourceContainer from '../templates/ResourceContainer';

class PersonDetails extends React.Component {

    renderBasicInformation = () => {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                <Header as='h3'>
                    {this.props.person.name}
                </Header>
                <strong>URL:</strong>
                <br/>
                {this.props.location.state.url}
                <br/>
                <br/>
                <strong>Gender:</strong>
                <br/>
                {this.props.person.gender}
                <br/>
                <br/>
                <strong>Born</strong>
                <br/>
                {this.props.person.birth_year}

            </Container>   
        )
    }

    render() {
        const person = this.props.person;
        
        return (
            <Container>
                <Header as='h2'>
                    Person details:
                </Header>
                <Grid>
                    <Grid.Column width={4}>
                        {this.renderBasicInformation()} 
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer list={person[FILMS]} type={FILMS} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer list={person[STARSHIPS]} type={STARSHIPS} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer list={person[SPECIES]} type={SPECIES} />
                    </Grid.Column>
                </Grid>    
            </Container>
                        
        )

    }
}

const mapStateToProps = (state, ownProps) => {

    // this data is coming from Link payload
    const currentPersonUrl = ownProps.location.state.url;

    const people = state.people.results.filter(person => person.url === currentPersonUrl);

    return {
        person: people[0],
    };
}
export default (withRouter(connect(mapStateToProps)(PersonDetails)));