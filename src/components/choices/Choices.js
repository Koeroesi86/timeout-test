import {connect} from 'react-redux'
import React from 'react'
import './Choices.css'

export class Choices extends React.Component {
    render() {
        const {recommended, avoided} = this.props;

        return (
            <div className="choices">
                <h3>Places to go:</h3>
                <ul>
                    {recommended && recommended.map((venue, i) => (
                        <li key={`venue-${i}`}>{venue.name}</li>
                    ))}
                </ul>
                <h3>Places to avoid:</h3>
                <ul>
                    {avoided && avoided.map((venue, i) => (
                        <li key={`venue-${i}`}>{venue.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    recommended: state.choices.recommended,
    avoided: state.choices.avoided
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Choices)