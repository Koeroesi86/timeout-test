import axios from 'axios/index'
import {receiveUsers} from '../actions'
import responseParser from './responseParser'
import {USERS_URL} from '../../../configurations/urls'

export default function getUsers({store}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: USERS_URL,
            responseType: 'text',
            transformResponse: responseParser,
        })
            .then(users => {
                store.dispatch(receiveUsers(users.data));
                resolve({store});
            })
            .catch(error => {
                reject(error);
            });
    })
}