import React from 'react';

import {Link} from 'react-router-dom';
import {Container, Divider, Header, Table} from 'semantic-ui-react'

import DetailsButton from '../templates/DetailsButton';

const PeopleTable = (props) => {


    const renderRows = () => {
        return props.list.map(person => {
            return (
                <Table.Row key={person.url}>
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

    const renderTable = () => {
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
                    {renderRows()}
                </Table.Body>
             </Table>
        )
    }

    return (
        <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
            <p>{`Total ${props.list.length} found`}</p>
                 <Divider horizontal/>
                 {renderTable()}
            </Container>
    )
}

export default PeopleTable;