import React from 'react';

import _ from 'lodash';
import {Container, Button} from 'semantic-ui-react';

class FilterBlock extends React.Component {

    state = {
        elements: this.props.elements
    }

    onButtonClicked = (element) => {


        const newElements = _.forEach(this.state.elements, (e) => {
            if (e.value === element.value) {
                e.active = !e.active;
            }
        })

        this.setState({newElements});
        this.props.onFilterDataChanged(this.props.title, this.state.elements);

    }

    onResetClicked = () => {
        const newElements = this.state.elements.map(e => {
            e.active = true;
            return e;
        })
        this.setState({
            elements: newElements
        });
        this.props.onFilterDataChanged(this.props.title, newElements);

    }
    
    renderButtons = () => {
        return this.props.elements.map(element => {        
            const color = element.active ? 'secondary color="black"': 'basic color="black"';
            return (
                <Button className={color} onClick={()=>this.onButtonClicked(element)} size="tiny">{element.label}</Button>
                )
        })
    }

    render() {

        return (
            <Container style={{backgroundColor: '#f6f6f6', padding: '20px', margin:'20px', position:'relative'}}>
                <Button basic size='tiny' style={{position: 'absolute', right: '0', top:'0', margin: '5px'}} onClick={this.onResetClicked}>Reset</Button>
                <p><strong>{this.props.title}:</strong></p>
                {this.renderButtons()}
            </Container>
        )
    }
}

export default FilterBlock;