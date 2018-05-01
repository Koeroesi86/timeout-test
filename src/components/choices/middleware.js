import {INIT_APP} from '../app/actions'
import getUsers from './utils/getUsers'
import getVenues from './utils/getVenues'
import getScores from "./utils/getScores";
import prioritizeVenues from "./utils/prioritizeVenues";
import {setAvoided, setRecommended} from "./actions";

export default store => next => action => {
    if (action.type === INIT_APP) {
        Promise.all([
            getUsers({store}),
            getVenues({store})
        ])
            .then(() => {
                const {users, venues} = store.getState().choices;

                const {
                    drinkScores,
                    dontEatScores
                } = getScores(users);

                const venuePriority = prioritizeVenues({
                    drinkScores,
                    dontEatScores,
                    venues
                });

                store.dispatch(setRecommended(venuePriority.slice(0, 3)));
                store.dispatch(setAvoided(venuePriority.slice(-1)));
            })
            .catch(error => {
                //TODO: error reporting
                console.warn(`something is wrong: ${error}`)
            })
    }

    next(action);
}