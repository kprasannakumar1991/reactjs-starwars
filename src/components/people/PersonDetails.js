import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Grid, Header, List, Container} from 'semantic-ui-react';

import {FILMS, STARSHIPS, SPECIES} from '../../utils/resourceTypes';

import ResourceCard from '../templates/ResourceCard';

class PersonDetails extends React.Component {

    renderPersonInformation = () => {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                <Header as='h3'>
                    {this.props.person.name}
                </Header>
                URL: {this.props.location.state.url}
                <br/>
                <br/>
                Gender: {this.props.person.gender}
                <br/>
                <br/>
                DOB: {this.props.person.birth_year}

            </Container>   
        )
    }

    renderResource = (resourceType) => {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                <p>{`Total ${this.props.person[resourceType].length} ${resourceType}`}</p>
                <List>
                    {
                        this.props.person[resourceType].map(resourceUrl => {
                            return <ResourceCard key={resourceUrl} type={resourceType} url={resourceUrl}/>
                        })
                    }
                </List>
            </Container>   
        )
    }
    
    render() {
        return (
            <Container>
                <Header as='h2'>
                    Person details:
                </Header>
                <Grid>
                <Grid.Column width={4}>
                    {this.renderPersonInformation()} 
                </Grid.Column>
                <Grid.Column width={4}>
                    {this.renderResource(FILMS)}
                </Grid.Column>
                <Grid.Column width={4}>
                {this.renderResource(STARSHIPS)}
                </Grid.Column>
                <Grid.Column width={4}>
                {this.renderResource(SPECIES)}
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