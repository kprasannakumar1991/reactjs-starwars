import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Divider, Header, Table } from 'semantic-ui-react'

import DetailsButton from '../templates/DetailsButton';

const PlanetTable =(props) => {

    const renderRows = () => {
        return props.list.map(planet => {
            return (
                <Table.Row key={planet.url}>
                        <Table.Cell>
                        <Header as='h4'>
                            <Header.Content>
                            {planet.name}
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>{planet.diameter}</Table.Cell>
                        <Table.Cell>{planet.residents.length}</Table.Cell>
                        <Table.Cell>{planet.films.length}</Table.Cell>
                        <Table.Cell>
                            <Link to={{pathname: '/planetdetails',state: {url: planet.url}}}>
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
                    <Table.HeaderCell>Diameter</Table.HeaderCell>
                    <Table.HeaderCell>Residents</Table.HeaderCell>
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

export default PlanetTable;