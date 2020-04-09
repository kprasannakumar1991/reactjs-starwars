import React from 'react';

import {Input} from 'semantic-ui-react';

class SearchBar extends React.Component {
    state = {value: ''}

    onTextChange = (event) => {
        this.props.onSearchTextChange(event.target.value);
        this.setState({value: event.target.value})
    }
    render() {
        return (
            <Input 
               icon='search'
               iconPosition='left'
               placeholder='Search by people name'
               value={this.state.value}
               onChange={this.onTextChange}
            />
        )
    }
}

export default SearchBar;