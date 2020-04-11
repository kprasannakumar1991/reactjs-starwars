import React from 'react';

import {connect} from 'react-redux';

import {Container, Grid, Header, Divider, Icon} from 'semantic-ui-react';

import HomeCard from './templates/HomeCard';
class Home extends React.Component {
    
    render() {
        return (
            <Container>

                <Grid>
                    <Grid.Row columns={6}>
                        <Grid.Column>
                            <HomeCard path='/people' title={'People'} count={this.props.peopleCount} total={this.props.totalPeople} image='images/starwars1.jpg'/>
                        </Grid.Column>
                        <Grid.Column>
                        <HomeCard path='/planets' title={'Planets'} count={this.props.planetsCount} total={this.props.totalPlanets} image='images/starwars1.jpg'/>
                        </Grid.Column>
                        <Grid.Column>
                        <HomeCard path='/films' title={'Films'} count={this.props.filmsCount} total={this.props.totalFilms} image='images/starwars1.jpg'/>
                        </Grid.Column>

                        <Grid.Column>
                        <HomeCard path='/species' title={'Species'} count={this.props.speciesCount} total={this.props.totalSpecies} image='images/starwars1.jpg'/>
                        </Grid.Column>
                        <Grid.Column>
                        <HomeCard path='/starships' title={'Starships'} count={this.props.starshipsCount} total={this.props.totalStarships} image='images/starwars1.jpg'/>
                        </Grid.Column>
                        <Grid.Column>
                        <HomeCard path='/vehicles' title={'Vehicles'} count={this.props.vehiclesCount} total={this.props.totalVehicles} image='images/starwars1.jpg'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Divider />
                
                
                <Header as='h4' style={{textAlign: 'center'}}>
                    <Header.Content>
                        Explore the app to increase the counts
                        <Header.Subheader>Let the force be with you...</Header.Subheader>
                        <br/>
                        <Icon name='rocket'/>
                    </Header.Content>
                </Header>


                
                
            </Container>
        )
    }
}

const mapStateToProps = state => {

    
    if(state.people) {
        console.log('people is definded');
    }

    return {
        peopleCount: state.people.results.length,
        totalPeople: state.people.count,

        planetsCount: state.planets.results.length,
        totalPlanets: state.planets.count,

        filmsCount: state.films.results.length,
        totalFilms: state.films.count,

        speciesCount: state.species.results.length,
        totalSpecies: state.species.count,

        starshipsCount: state.starships.results.length,
        totalStarships: state.starships.count,

        vehiclesCount: state.vehicles.results.length,
        totalVehicles: state.vehicles.count,
    }
}

export default connect(mapStateToProps)(Home);