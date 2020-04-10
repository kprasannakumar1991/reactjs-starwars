import React from 'react';
import {Container} from 'semantic-ui-react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {connect} from 'react-redux';

import NavigationBar from './NavigationBar';
import Home from './Home';
import People from './people/People';
import Planets from './planets/Planets';
import Films from './films/Films';
import Species from './species/Species';
import Starships from './starships/Starships';
import Vehicles from './vehicles/Vehicles';

import PeopleDetails from './people/PeopleDetails';
import FilmDetails from './films/FilmDetails';

import {getData} from '../actions';

class App extends React.Component {

    componentDidMount = () => {
        this.props.getData();
    }

    render() {
        return (
            <BrowserRouter>
                    <NavigationBar/>
                    <Container>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/people">
                                <People />
                            </Route>
                            <Route exact path="/planets">
                                <Planets />
                            </Route>
                            <Route exact path="/films">
                                <Films />
                            </Route>
                            <Route exact path="/species">
                                <Species />
                            </Route>
                            <Route exact path="/starships">
                                <Starships />
                            </Route>
                            <Route exact path="/vehicles">
                                <Vehicles />
                            </Route>
                            <Route exact path="/peopledetails">
                                <PeopleDetails/>
                            </Route>
                            <Route exact path="/filmdetails">
                                <FilmDetails/>
                            </Route>
                        </Switch>
                    </Container>

            </BrowserRouter>
           
        )
    }
}



export default connect(null, {getData})(App);