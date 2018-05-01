import axios from "axios/index";
import {receiveVenues} from "../actions";
import responseParser from './responseParser'
import {VENUES_URL} from '../../../configurations/urls'

export default function getVenues({store}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: VENUES_URL,
            responseType: 'text',
            transformResponse: responseParser,
        })
            .then(venues => {
                store.dispatch(receiveVenues(venues.data));
                resolve({store});
            })
            .catch(error => {
                reject(error);
            });
    })
}