import React from 'react';
import {Container} from 'semantic-ui-react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavigationBar from './NavigationBar';
import Home from './Home';
import People from './People';
import Planet from './Planet';

class App extends React.Component {

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

export default App;