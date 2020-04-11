import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container, Grid, Header, List} from 'semantic-ui-react';

import {CHARACTERS, PLANETS, STARSHIPS} from '../../utils/resourceTypes';

import ResourceContainer from '../templates/ResourceContainer';

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

    render() {
        return (
            <Container>
                <Header as='h2'>
                    Film details:
                </Header>
                <Grid>
                    <Grid.Column width={4}>
                        {this.renderFilmInformation()} 
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer parent={this.props.film} child={CHARACTERS} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer parent={this.props.film} child={PLANETS} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ResourceContainer parent={this.props.film} child={STARSHIPS} />
                    </Grid.Column>
                </Grid>    

            </Container>
                            
        )

    }
}

const mapStateToProps = (state, ownProps) => {

    // this data is coming from Link payload
    const currentFilmUrl = ownProps.location.state.url;

    const films = state.films.results.filter(film => film.url === currentFilmUrl);

    return {
        film: films[0],
    };
}
export default (withRouter(connect(mapStateToProps)(FilmDetails)));