import React from 'react'
import { Header, Table } from 'semantic-ui-react'

class PeopleTable extends React.Component {

    onPersonSelected = (name) => {
        this.props.onPersonSelected(name);
    }

    renderRows = () => {
        return this.props.list.map(people => {
            return (
                <Table.Row>
                        <Table.Cell>
                        <Header as='h4'>
                            <Header.Content onMouseOver ={() => this.onPersonSelected(people.name)}>
                            {people.name}
                            {/* <Header.Subheader>{people.gender}</Header.Subheader> */}
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>{people.gender}</Table.Cell>
                        <Table.Cell>{people.films.length}</Table.Cell>
                        {/* <Table.Cell>{people.vehicles.length}</Table.Cell> */}
                        {/* <Table.Cell>{people.starships.length}</Table.Cell> */}
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
                    {/* <Table.HeaderCell>Vehicles</Table.HeaderCell> */}
                    {/* <Table.HeaderCell>Starships</Table.HeaderCell> */}
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