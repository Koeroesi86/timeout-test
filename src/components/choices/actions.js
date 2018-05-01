export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_VENUES = 'RECEIVE_VENUES'
export const SET_RECOMMENDED = 'SET_RECOMMENDED'
export const SET_AVOID = 'SET_AVOID'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function receiveVenues(venues) {
    return {
        type: RECEIVE_VENUES,
        venues
    }
}

export function setRecommended(recommended) {
    return {
        type: SET_RECOMMENDED,
        recommended
    }
}

export function setAvoided(avoided) {
    return {
        type: SET_AVOID,
        avoided
    }
}