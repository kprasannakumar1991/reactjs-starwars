import React from 'react';

import {connect} from 'react-redux';

import {Label} from 'semantic-ui-react';

class Home extends React.Component {
    
    render() {
        return (
            <div>
                Home page

                <Label>People {this.props.peopleCount}</Label>
                

            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        peopleCount: state.people.length,
        planetsCount: state.planets.length,
        filmsCount: state.films.length,
        speciesCount: state.species.length,
        starshipsCount: state.starships.length,
        vehiclesCount: state.vehicles.length
    }
}

export default connect(mapStateToProps)(Home);