import React from 'react';

import {withRouter} from 'react-router-dom';
import {Container, Header} from 'semantic-ui-react';

import HomeCard from '../templates/HomeCard';

class FilmDetails extends React.Component {

    state = {
        url: null,
        title: ''
    }

    componentDidMount = () => {

        const {url, title} = this.props.location.state;

        this.setState({url, title});
    }

    render() {

        return (
            <Container>
                Film Details
                <br/>
                <Header>
                    {this.state.title}
                </Header>
                {this.state.url}

                {/* <HomeCard /> */}
            </Container>
        )

    }
}

export default withRouter(FilmDetails);