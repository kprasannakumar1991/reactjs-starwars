import React from 'react';

import {Link} from 'react-router-dom';
import {Container, Divider, Header, Table} from 'semantic-ui-react'

import DetailsButton from '../templates/DetailsButton';

const FilmTable = (props) => {

    const renderRows = () => {
        return props.list.map(film => {
            return (
                <Table.Row key={film.url}>
                        <Table.Cell>
                        <Header as='h4'>
                            <Header.Content>
                            {film.title}
                            <Header.Subheader>{film.release_date}</Header.Subheader>
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>{film.director}</Table.Cell>
                        <Table.Cell>{film.characters.length} </Table.Cell>
                        <Table.Cell>
                            <Link to={{pathname: '/filmdetails',state: {url: film.url}}}>
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
                    <Table.HeaderCell>Director</Table.HeaderCell>
                    <Table.HeaderCell>Characters</Table.HeaderCell>
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

export default FilmTable;