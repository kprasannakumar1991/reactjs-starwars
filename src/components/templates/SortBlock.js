import React from 'react';

import {Container, Form, Checkbox} from 'semantic-ui-react';

class SortBlock extends React.Component {

    state = {
        value: null
    }

    onSortDataSelected = (e, {value}) => {

        this.setState({
            value
        })

        this.props.onSortDataSelected(this.props.title, value);

    }

    renderBody = () => {
        // element = {label, value}

        return this.props.elements.map(element => {
            return (
                <Form.Field>
                    <Checkbox
                    radio
                    label={element.label}
                    name='checkboxRadioGroup'
                    value={element.value}
                    checked={this.state.value === `${element.value}`}
                    onChange={this.onSortDataSelected}
                />

                </Form.Field>
            )
        })

    }


    render() {
        return (
            <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
                 <Form>
                <Form.Field>
                <p><strong>{this.props.title}</strong></p>
                </Form.Field>
               {this.renderBody()}
            </Form>

            </Container>

        )
    }
}

export default SortBlock;