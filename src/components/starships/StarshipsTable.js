import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Divider, Header, Table } from 'semantic-ui-react'

import DetailsButton from '../templates/DetailsButton';

const StarshipsTable = (props) => {

    const renderRows = () => {
        return props.list.map(ship => {
            return (
                <Table.Row key={ship.url}>
                        <Table.Cell>
                        <Header as='h4'>
                            <Header.Content>
                            {ship.name}
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>{ship.starship_class}</Table.Cell>
                        <Table.Cell>{ship.max_atmosphering_speed}</Table.Cell>

                        <Table.Cell>
                            <Link to={{pathname: '/starshipdetails',state: {url: ship.url}}}>
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
                    <Table.HeaderCell>Class</Table.HeaderCell>
                    <Table.HeaderCell>Speed</Table.HeaderCell>

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

export default StarshipsTable;