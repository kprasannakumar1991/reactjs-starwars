import React from 'react';

import {connect} from 'react-redux';

import {Container, Grid, Header, Divider} from 'semantic-ui-react';

import HomeCard from './templates/HomeCard';
class Home extends React.Component {
    
    render() {
        return (
            <Container>

                <Grid>
                    <Grid.Row columns={6}>
                        <Grid.Column>
                            <HomeCard path='/people' title={'People'} count={this.props.peopleCount} image='images/starwars1.jpg'/>
                        </Grid.Column>
                        <Grid.Column>
                        <HomeCard path='/planets' title={'Planets'} count={this.props.planetsCount} image='images/starwars1.jpg'/>
                        </Grid.Column>
                        <Grid.Column>
                        <HomeCard path='/films' title={'Films'} count={this.props.filmsCount} image='images/starwars1.jpg'/>
                        </Grid.Column>

                        <Grid.Column>
                        <HomeCard path='/species' title={'Species'} count={this.props.speciesCount} image='images/starwars1.jpg'/>
                        </Grid.Column>
                        <Grid.Column>
                        <HomeCard path='/starships' title={'Starships'} count={this.props.starshipsCount} image='images/starwars1.jpg'/>
                        </Grid.Column>
                        <Grid.Column>
                        <HomeCard path='/vehicles' title={'Vehicles'} count={this.props.vehiclesCount} image='images/starwars1.jpg'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Divider />
                
                
                <Header as='h4' style={{textAlign: 'center'}}>
                    <Header.Content>
                        Counts with increase once you travel through the app. Its just a beginning
                        <Header.Subheader>Let the force be with you...</Header.Subheader>
                    </Header.Content>
                </Header>


                
                
            </Container>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        peopleCount: state.people.length,
        planetsCount: state.planets.length,
        filmsCount: state.films.length,
        speciesCount: state.species.length,
        starshipsCount: state.starships.length,
        vehiclesCount: state.vehicles.length
    }
}

export default connect(mapStateToProps)(Home);