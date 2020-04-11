import React from 'react';

import {Link} from 'react-router-dom';
import { Header, Table} from 'semantic-ui-react'

import DetailsButton from '../templates/DetailsButton';

class PeopleTable extends React.Component {


    renderRows = () => {
        return this.props.list.map(person => {
            return (
                <Table.Row>
                        <Table.Cell>
                        <Header as='h4'>
                            <Header.Content>
                            {person.name}
                            {/* <Header.Subheader>{people.gender}</Header.Subheader> */}
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>{person.gender}</Table.Cell>
                        <Table.Cell>{person.films.length}</Table.Cell>
                        <Table.Cell>
                            <Link to={{pathname: '/persondetails',state: {url: person.url}}}>
                                    <DetailsButton />
                            </Link>
                        </Table.Cell>
                </Table.Row>
            )
        })
    }

    render() {
        return (
            <Table basic='very' celled collapsing>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Gender</Table.HeaderCell>
                    <Table.HeaderCell>Films</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.renderRows()}
                </Table.Body>
             </Table>
        )
    }
}

export default PeopleTable;