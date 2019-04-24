import React from 'react';

class Weather extends React.Component {

    showContent () {
      const {city, country, temp, pressure} = this.props;
      return (
          <div>
              <p>Position: { city }, { country }</p>
              <p>Temperature: { temp }</p>
              <p>Pressure: { pressure }</p>
          </div>
      );
    }

    showError () {
      return (
        <p className = 'error'> { this.props.error } </p>
      )
    }

    render () {
        return (
            <div className = 'infosWeath'>
              { this.props.error ? this.showError() : this.showContent() }
            </div>
        )
    }
}


// const Weather = props => (
//         <div className='infoWeath'>
//             { props.city &&
            {/*<div>*/}
            {/*    <p>Position: {props.city}, {props.country}</p>*/}
            {/*    <p>Temperature: {props.temp}</p>*/}
            {/*    <p>Pressure: {props.pressure}</p>*/}
            {/*</div>*/}
//             }
//             <p className='error'>{ props.error }</p>
//         </div>
// );

export default Weather;
