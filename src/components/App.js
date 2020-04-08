import React from 'react';
import {Container} from 'semantic-ui-react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {connect} from 'react-redux';

import NavigationBar from './NavigationBar';
import Home from './starwars/Home';
import People from './starwars/People';
import Planets from './starwars/Planets';
import Films from './starwars/Films';
import Species from './starwars/Species';
import Starships from './starwars/Starships';
import Vehicles from './starwars/Vehicles';

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
                        </Switch>
                    </Container>

            </BrowserRouter>
           
        )
    }
}



export default connect(null, {getData})(App);