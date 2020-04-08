// import SW_API from '../apis/SW_API';
import axios from 'axios';
import * as ACTION_TYPES from '../utils/actionTypes';

export const getData = () => async dispatch => {
        // const response = await SW_API.get('/people')
        const people = await axios.get('./data/people.json');
        const planets = await axios.get('./data/planets.json');
        const films = await axios.get('./data/films.json');
        const species = await axios.get('./data/species.json');
        const starships = await axios.get('./data/starships.json');
        const vehicles = await axios.get('./data/vehicles.json');

        dispatch({
            type: ACTION_TYPES.PEOPLE,
            payload: people.data.results
        });

        dispatch({
            type: ACTION_TYPES.PLANETS,
            payload: planets.data.results
        })
        dispatch({
            type: ACTION_TYPES.FILMS,
            payload: films.data.results
        })
        dispatch({
            type: ACTION_TYPES.SPECIES,
            payload: species.data.results
        })
        dispatch({
            type: ACTION_TYPES.STARSHIPS,
            payload: starships.data.results
        })
        dispatch({
            type: ACTION_TYPES.VEHICLES,
            payload: vehicles.data.results
        })

}

