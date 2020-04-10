import React from 'react';

import {withRouter} from 'react-router-dom';

import {Container} from 'semantic-ui-react';

class PeopleDetails extends React.Component {

    state = {

    }
    componentDidMount = () => {
        // const {handle} = this.props.match.params;
        const {name, age, city, data} = this.props.location.state;

        console.log(name + ' ' + age + ' ' + city);
        this.setState({
            name,
            age,
            city,
            data
        })
    }

    render() {

        console.log(this.props.location);
        return (
            <Container>
                People Details {this.state.data}
            </Container>
        )
    }
}

export default withRouter(PeopleDetails);