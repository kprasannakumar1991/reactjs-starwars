import SW_API from '../apis/SW_API';
import axios from 'axios';
import * as TYPES from './types';

export const getData = () => async dispatch => {
        // const response = await SW_API.get('/people')
        const people = await axios.get('./data/people.json');
        const planets = await axios.get('./data/planets.json');
        const films = await axios.get('./data/films.json');
        const species = await axios.get('./data/species.json');
        const starships = await axios.get('./data/starships.json');
        const vehicles = await axios.get('./data/vehicles.json');

        dispatch({
            type: TYPES.PEOPLE,
            payload: people.data.results
        });

        dispatch({
            type: TYPES.PLANETS,
            payload: planets.data.results
        })
        dispatch({
            type: TYPES.FILMS,
            payload: films.data.results
        })
        dispatch({
            type: TYPES.SPECIES,
            payload: species.data.results
        })
        dispatch({
            type: TYPES.STARSHIPS,
            payload: starships.data.results
        })
        dispatch({
            type: TYPES.VEHICLES,
            payload: vehicles.data.results
        })

}

export const fetchPerson = (personUrl) => async (dispatch, getState) => {

    // check if the url already exists in the redux-store
    const matchedPeople = getState().people.filter(p => p.url === personUrl);
    if (matchedPeople.length > 0) {
        // the person info already exists in the client

        // TESTING: just for testing appending the existing person again back to redux store
        // This will lead to duplication.
        // dispatch({
        //     type: TYPES.FETCH_SINGLE_PERSON,
        //     payload: matchedPeople[0]
        // });
    } else {
        console.log('Fetching ' + personUrl);
        // need to fetch the person info from server and save it to the redux store
        // const response = await SW_API.get(personUrl);

        // dispatch({
        //     type: TYPES.FETCH_SINGLE_PERSON,
        //     payload: response.data
        // })
    }
}

