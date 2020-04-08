import React from 'react';
import {Container} from 'semantic-ui-react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {connect} from 'react-redux';

import NavigationBar from './NavigationBar';
import Home from './Home';
import People from './People';
import Planet from './Planet';

import {getData} from '../actions';

class App extends React.Component {

    componentDidMount = () => {
        this.props.getData();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavigationBar/>
                    <Container>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/people">
                                <People />
                            </Route>
                            <Route exact path="/planet">
                                <Planet />
                            </Route>
                        </Switch>
                    </Container>

                </div>
            </BrowserRouter>
           
        )
    }
}



export default connect(null, {getData})(App);