import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container, Grid, Header} from 'semantic-ui-react';

import {CHARACTERS, PLANETS, STARSHIPS, VEHICLES} from '../../utils/resourceTypes';

import ResourceContainer from '../templates/ResourceContainer';

class FilmDetails extends React.Component {

    renderBasicInformation = () => {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                <Header as='h3'>
                    {this.props.film.title}
                </Header>

                <strong>URL:</strong>
                <br/>
                {this.props.location.state.url}
                <br/>
                <br/>
                <strong>Director:</strong>
                <br/>
                {this.props.film.director}
                <br/>
                <br/>
                <strong>Producer:</strong>
                <br/>
                {this.props.film.producer}
                <br/>
                <br/>
                <strong>Released date:</strong>
                <br/>
                {this.props.film.release_date}
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
                        {this.renderBasicInformation()} 
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <ResourceContainer parent={this.props.film} child={CHARACTERS} />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <ResourceContainer parent={this.props.film} child={PLANETS} />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <ResourceContainer parent={this.props.film} child={STARSHIPS} />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <ResourceContainer parent={this.props.film} child={VEHICLES} />
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