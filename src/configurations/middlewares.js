import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import choices from '../components/choices/middleware'

const history = createHistory();

export default [
    routerMiddleware(history),
    choices
]