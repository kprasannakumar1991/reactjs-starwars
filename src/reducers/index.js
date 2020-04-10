import {combineReducers} from 'redux';

import * as ACTION_TYPES from '../actions/types';

const peopleReducer = (people=[], action) => {
    if (action.type === ACTION_TYPES.PEOPLE || action.type === ACTION_TYPES.FETCH_SINGLE_PERSON) {

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

const planetsReducer = (planets=[], action) => {
    if (action.type === ACTION_TYPES.PLANETS) {
        return action.payload;
    }

    return planets;
}

const filmsReducer = (films=[], action) => {
    if (action.type === ACTION_TYPES.FILMS) {
        return action.payload;
    }

    return films;
}

const speciesReducer = (species=[], action) => {
    if (action.type === ACTION_TYPES.SPECIES) {
        return action.payload;
    }

    return species;
}

const starshipsReducer = (starships=[], action) => {
    if (action.type === ACTION_TYPES.STARSHIPS) {
        return action.payload;
    }

    return starships;
}

const vehiclesReducer = (vehicles=[], action) => {
    if (action.type === ACTION_TYPES.VEHICLES) {
        return action.payload;
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