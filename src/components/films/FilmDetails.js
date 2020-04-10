import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container, Grid, Header, List} from 'semantic-ui-react';

import PersonCard from '../people/PersonCard';
import PlanetCard from '../planets/PlanetCard';

class FilmDetails extends React.Component {

    renderFilmInformation = () => {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                <Header as='h3'>
                    {this.props.film.title}
                </Header>

                URL: {this.props.location.state.url}
                <br/>
                <br/>
                Director: {this.props.film.director}
                <br/>
                <br/>
                Producer: {this.props.film.producer}
                <br/>
                <br/>
                Released on: {this.props.film.release_date}
            </Container>
        )
    }

    renderCharacters = () => {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                <p>{`Total ${this.props.people.length} characters`}</p>
                <List>
                    {
                        this.props.film.characters.map(personUrl => {
                            return <PersonCard personUrl={personUrl}/>
                        })
                    }
                </List>
            </Container>   
        )
    }

    renderPlanets = () => {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                <p>{`Total ${this.props.planets.length} planets`}</p>
                <List>
                    {
                        this.props.film.planets.map(planetUrl => {
                            return <PlanetCard planetUrl={planetUrl}/>
                        })
                    }
                </List>
            </Container>   
        )

    }
    
    render() {

        console.log('render ');

        return (
                <Grid>
                <Grid.Column width={4}>
                    {this.renderFilmInformation()} 
                </Grid.Column>
                <Grid.Column width={4}>
                    {this.renderCharacters()}
                </Grid.Column>
                <Grid.Column width={4}>
                {this.renderPlanets()}
                </Grid.Column>
            </Grid>                
        )

    }
}

const mapStateToProps = (state, ownProps) => {

    // this data is coming from Link payload
    const currentFilmUrl = ownProps.location.state.url;

    const films = state.films.filter(film => film.url === currentFilmUrl);
    const filmCharacters = films[0].characters;
    const planets = films[0].planets;

    return {
        film: films[0],
        people: filmCharacters,
        planets: planets
    };
}
export default (withRouter(connect(mapStateToProps)(FilmDetails)));