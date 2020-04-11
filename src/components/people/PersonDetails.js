import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Grid, Header, List, Container} from 'semantic-ui-react';

import {SINGLE_FILM} from '../../actions/types';
import GenericCard from '../templates/GenericCard';

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

    renderFilms = () => {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                <p>{`Total ${this.props.person.films.length} films`}</p>
                <List>
                    {
                        this.props.person.films.map(filmUrl => {
                            return <GenericCard resourceType={SINGLE_FILM} resourceUrl={filmUrl}/>
                        })
                    }
                </List>
            </Container>   
        )

    }
    
    render() {
        return (
                <Grid>
                <Grid.Column width={4}>
                    {this.renderPersonInformation()} 
                </Grid.Column>
                <Grid.Column width={4}>
                    {this.renderFilms()}
                </Grid.Column>
                <Grid.Column width={4}>
                </Grid.Column>
            </Grid>                
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