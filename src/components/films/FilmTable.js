import React from 'react';

import {Link} from 'react-router-dom';
import { Header, Table} from 'semantic-ui-react'

import DetailsButton from '../templates/DetailsButton';

class FilmTable extends React.Component {


    renderRows = () => {
        return this.props.list.map(film => {
            return (
                <Table.Row>
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

    render() {
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
                    {this.renderRows()}
                </Table.Body>
             </Table>
        )
    }
}

export default FilmTable;