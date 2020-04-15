import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Segment, Menu, Container} from 'semantic-ui-react';

class NavigationBar extends React.Component{
    
    render() {

        let activeItem = this.props.location.pathname;
        
        return (
            <Segment inverted>
                <Menu inverted pointing secondary size='mini'>
                    <Container>
                            <Menu.Item 
                                as={Link}
                                to='/'
                                name="Star Wars"
                                active={activeItem === '/'}
                                onClick={this.handleItemClick}
                            />

                            <Menu.Item
                                as={Link}
                                to='/people' 
                                name="people"
                                active={activeItem === '/people'}
                                onClick={this.handleItemClick}
                            />

                            <Menu.Item
                                as={Link}
                                to='/planets' 
                                name="planets"
                                active={activeItem === '/planets'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                as={Link}
                                to='/films' 
                                name="films"
                                active={activeItem === '/films'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                as={Link}
                                to='/species' 
                                name="species"
                                active={activeItem === '/species'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                as={Link}
                                to='/starships' 
                                name="starships"
                                active={activeItem === '/starships'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item  
                                as={Link}
                                to='/vehicles'
                                name="vehicles"
                                active={activeItem === '/vehicles'}
                                onClick={this.handleItemClick}
                            />

                            
                    </Container>
                </Menu>
            </Segment>
            
        )
    }
}

export default withRouter(NavigationBar);