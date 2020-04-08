import React from 'react';
import {Link} from 'react-router-dom';
import {Segment, Menu, Container} from 'semantic-ui-react';

class NavigationBar extends React.Component{

    state = {activeItem: 'Star Wars'}
    
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {

        const {activeItem} = this.state;

        return (
            <Segment inverted>
                <Menu inverted pointing secondary size='mini'>
                    <Container>
                        <Link to="/">
                            <Menu.Item 
                                name="Star Wars"
                                active={activeItem === 'Star Wars'}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                        <Link to="/people">
                            <Menu.Item 
                                name="People"
                                active={activeItem === 'People'}
                                onClick={this.handleItemClick}
                                />
                        </Link>
                        <Link to="/planet">
                            <Menu.Item 
                                name="Planet"
                                active={activeItem === 'Planet'}
                                onClick={this.handleItemClick}
                            />
                        </Link>
                    </Container>
                </Menu>
            </Segment>
            
        )
    }
}

export default NavigationBar;