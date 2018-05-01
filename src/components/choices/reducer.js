import {RECEIVE_USERS, RECEIVE_VENUES, SET_AVOID, SET_RECOMMENDED} from "./actions";

let initialState = {
    users: [],
    venues: [],
    recommended: [],
    avoided: []
};

export default (state = initialState, action) => {
    if (action.type === RECEIVE_USERS) {
        return Object.assign({}, state, {users: action.users})
    }

    if (action.type === RECEIVE_VENUES) {
        return Object.assign({}, state, {venues: action.venues})
    }

    if (action.type === SET_RECOMMENDED) {
        return Object.assign({}, state, {recommended: action.recommended})
    }

    if (action.type === SET_AVOID) {
        return Object.assign({}, state, {avoided: action.avoided})
    }

    return state;
}