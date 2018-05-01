import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app/App'
import store from './components/app/store'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();