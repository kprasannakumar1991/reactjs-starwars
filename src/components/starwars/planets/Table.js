import React from 'react'
import { Header, Table } from 'semantic-ui-react'

class PlanetTable extends React.Component {

    renderRows = () => {
        return this.props.list.map(planet => {
            return (
                <Table.Row>
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
                    <Table.HeaderCell>Diameter</Table.HeaderCell>
                    <Table.HeaderCell>Residents</Table.HeaderCell>
                    <Table.HeaderCell>Films</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.renderRows()}
                </Table.Body>
             </Table>
        )
    }
}

export default PlanetTable;