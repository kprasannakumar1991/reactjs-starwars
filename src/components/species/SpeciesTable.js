import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Divider, Header, Table } from 'semantic-ui-react'

import DetailsButton from '../templates/DetailsButton';

const SpeciesTable = (props) => {

    const renderRows = () => {
        return props.list.map(species => {
            return (
                <Table.Row key={species.url}>
                        <Table.Cell>
                        <Header as='h4'>
                            <Header.Content>
                            {species.name}
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>{species.classification}</Table.Cell>
                        <Table.Cell>{species.language}</Table.Cell>
                        <Table.Cell>
                            <Link to={{pathname: '/speciesdetails',state: {url: species.url}}}>
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
                    <Table.HeaderCell>Classification</Table.HeaderCell>
                    <Table.HeaderCell>Language</Table.HeaderCell>
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

export default SpeciesTable;