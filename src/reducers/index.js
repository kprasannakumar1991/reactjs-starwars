import {combineReducers} from 'redux';

import * as ACTION_TYPES from '../actions/types';

const initialState = {
    count: 0,
    results: []
}

const peopleReducer = (people=initialState, action) => {
    if (action.type === ACTION_TYPES.PEOPLE || action.type === ACTION_TYPES.SINGLE_PERSON) {

        if (action.type === ACTION_TYPES.PEOPLE) {
            // returning a brand new list to the store
            return action.payload;
        } else {
            // adding the new person data to existing list of people in the store
            // and returing a brand new list to the store
            return [...people, action.payload];
        }
    }

    return people;
}

const planetsReducer = (planets=initialState, action) => {
    if (action.type === ACTION_TYPES.PLANETS || action.type === ACTION_TYPES.SINGLE_PLANET) {

        if (action.type === ACTION_TYPES.PLANETS) {
            return action.payload;
        } else {
            return [...planets, action.payload];
        }
    }

    return planets;
}

const filmsReducer = (films=initialState, action) => {
    if (action.type === ACTION_TYPES.FILMS || action.type === ACTION_TYPES.SINGLE_FILM) {

        if (action.type === ACTION_TYPES.FILMS) {
            return action.payload;
        } else {
            return [...films, action.payload];
        }
    }

    return films;
}

const speciesReducer = (species=initialState, action) => {
    if (action.type === ACTION_TYPES.SPECIES || action.type === ACTION_TYPES.SINGLE_SPECIES) {

        if (action.type === ACTION_TYPES.SPECIES) {
            return action.payload;
        } else {
            return [...species, action.payload];
        }
    }

    return species;
}

const starshipsReducer = (starships=initialState, action) => {
    if (action.type === ACTION_TYPES.STARSHIPS || action.type === ACTION_TYPES.SINGLE_STARSHIPS) {

        if (action.type === ACTION_TYPES.STARSHIPS) {
            return action.payload;
        } else {
            return [...starships, action.payload];
        }
    }

    return starships;
}

const vehiclesReducer = (vehicles=initialState, action) => {
    if (action.type === ACTION_TYPES.VEHICLES || action.type === ACTION_TYPES.SINGLE_VEHICLES) {

        if (action.type === ACTION_TYPES.VEHICLES) {
            return action.payload;
        } else {
            return [...vehicles, action.payload];
        }
    }

    return vehicles;
}

export default combineReducers({
    people: peopleReducer,
    planets: planetsReducer,
    films: filmsReducer,
    species: speciesReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer
})