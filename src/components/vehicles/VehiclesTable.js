import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Divider, Header, Table } from 'semantic-ui-react'

import DetailsButton from '../templates/DetailsButton';

const VehiclesTable = (props) => {

    const renderRows = () => {
        return props.list.map(vehicle => {
            return (
                <Table.Row key={vehicle.url}>
                        <Table.Cell>
                        <Header as='h4'>
                            <Header.Content>
                            {vehicle.name}
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>{vehicle.vehicle_class}</Table.Cell>
                        <Table.Cell>{vehicle.crew}</Table.Cell>
                        <Table.Cell>{vehicle.passengers}</Table.Cell>

                        <Table.Cell>
                            <Link to={{pathname: '/vehicledetails',state: {url: vehicle.url}}}>
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
                    <Table.HeaderCell>Crew</Table.HeaderCell>
                    <Table.HeaderCell>Passengers</Table.HeaderCell>

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

export default VehiclesTable;