import React from 'react';

import {Container, Input} from 'semantic-ui-react';

class SearchBar extends React.Component {
    state = {value: ''}

    onTextChange = (event) => {
        this.props.onSearchTextChange(event.target.value);
        this.setState({value: event.target.value})
    }
    render() {
        return (
            <Container style={{padding: '20px 20px 20px 0px'}}>
                <Input 
                icon='search'
                iconPosition='left'
                placeholder={this.props.placeholder}
                value={this.state.value}
                onChange={this.onTextChange}
                />
            </Container>
        )
    }
}

export default SearchBar;