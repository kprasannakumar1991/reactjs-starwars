import SW_API from '../apis/SW_API';
import axios from 'axios';
import * as TYPES from './types';

// called from App.js
export const getDataFromServer = () => async dispatch => {

    // fetches initial record set for each resources
    const people = await SW_API.get('/people')
    const planets = await SW_API.get('/planets');
    const films = await SW_API.get('/films');
    const species = await SW_API.get('/species');
    const starships = await SW_API.get('/starships');
    const vehicles = await SW_API.get('/vehicles');

    dispatch({
        type: TYPES.PEOPLE,
        payload: {
            count: people.data.count,
            results: people.data.results
        }
    });

    dispatch({
        type: TYPES.PLANETS,
        payload: {
            count: people.data.count,
            results:planets.data.results}
    })
    dispatch({
        type: TYPES.FILMS,
        payload: {
            count: films.data.count,
            results: films.data.results
        }
    })

    dispatch({
        type: TYPES.SPECIES,
        payload: {
            count: species.data.count,
            results: species.data.results
        }
    })

    dispatch({
        type: TYPES.STARSHIPS,
        payload: {
            count: starships.data.count,
            results: starships.data.results
        }
    })
    dispatch({
        type: TYPES.VEHICLES,
        payload: {
            count: vehicles.data.count,
            results: vehicles.data.results
        }
    })

}

// called from App.js
export const getData = () => async dispatch => {

    // fetching the locally stoed data
    const people = await axios.get('./data/people.json');
    const planets = await axios.get('./data/planets.json');
    const films = await axios.get('./data/films.json');
    const species = await axios.get('./data/species.json');
    const starships = await axios.get('./data/starships.json');
    const vehicles = await axios.get('./data/vehicles.json');

    dispatch({
        type: TYPES.PEOPLE,
        payload: {
            count: people.data.count,
            results: people.data.results
        }
    });

    dispatch({
        type: TYPES.PLANETS,
        payload: {
            count: people.data.count,
            results:planets.data.results}
    })
    dispatch({
        type: TYPES.FILMS,
        payload: {
            count: films.data.count,
            results: films.data.results
        }
    })

    dispatch({
        type: TYPES.SPECIES,
        payload: {
            count: species.data.count,
            results: species.data.results
        }
    })

    dispatch({
        type: TYPES.STARSHIPS,
        payload: {
            count: starships.data.count,
            results: starships.data.results
        }
    })
    dispatch({
        type: TYPES.VEHICLES,
        payload: {
            count: vehicles.data.count,
            results: vehicles.data.results
        }
    })

}

export const fetchDataFromServer = (type, url) => async (dispatch, getState) => {
    try {
        const response = await SW_API.get(url);
        dispatch({
            type: type,
            payload: response.data
        })
    }
    catch(error) {
        console.log('Error while fetching data ' + JSON.stringify(error.message));
    }
}

// only for testing: should not be used by any component
export const fetchPersonFromServer = (personUrl) => async (dispatch, getState) => {

    // check if the url already exists in the redux-store
    const matchedPeople = getState().people.results.filter(p => p.url === personUrl);
    if (matchedPeople.length > 0) {
        // the person info already exists in the client

        // TESTING: just for testing appending the existing person again back to redux store
        // This will lead to duplication.
        dispatch({
            type: TYPES.SINGLE_PERSON,
            payload: matchedPeople[0]
        });
    } else {
        // need to fetch the person info from server and save it to the redux store
        // const response = await SW_API.get(personUrl);

        // dispatch({
        //     type: TYPES.SINGLE_PERSON,
        //     payload: response.data
        // })
    }
}
