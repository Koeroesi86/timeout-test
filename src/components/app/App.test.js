import React from 'react'
import ConnectedApp from './App'
import configureMockStore from 'redux-mock-store'
import {shallow} from 'enzyme'
import middlewares from '../../configurations/middlewares'

describe('App component', () => {
    const mockStore = configureMockStore(middlewares);

    it('renders without crashing', () => {
        const result = shallow(<ConnectedApp store={mockStore}/>);
    });
});
