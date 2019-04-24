import React, { Component } from 'react';

class Form extends Component {

    onInputChange = ({ target: { value }}) => {
        this.props.updateCity(value);
    };

    render () {
        const { getWeather, city} = this.props;

        return (
            <>
                <input type="text" onChange={ this.onInputChange } value = { city } placeholder="Enter city name" />
                <button onClick={ getWeather }>Get Weather</button>
            </>
        );
    }
}

export default Form;