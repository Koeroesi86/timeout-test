import React, {Component} from 'react'
import './App.css'
import Choices from '../choices/Choices'

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Choices/>
            </div>
        );
    }
}

export default App
