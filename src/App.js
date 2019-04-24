import React from 'react';
import Info from './compoents/Info';
import Form from './compoents/Form';
import Weather from './compoents/Weather';
import axios from 'axios'

const API_KEY = 'd0506592bdc0b24fa1263b8464673a02';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {city: '', country: '', temp: '', pressure: '', error: ''};
    }

    getWeather  = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}&units=metric`)
            .then(({ data }) => this.updateSuccessfulState(data))
            .catch(({ message }) => this.updateErrorState(message));
    };

    updateSuccessfulState({main: {temp, pressure}, sys: {country}}) {
        this.setState({ temp, country, pressure, error: null });
    }

    updateErrorState(error) {
        this.setState({ error });
    }

    updateCity = value => {
        this.setState({city: value});
    }

    render(){
        const {city, temp, country, pressure, error} = this.state;
        return(
          <div className='wrapper'>
              <div className="main">
                  <div className="container">
                      <div className="row">
                          <div className='col-sm-5 info'>
                              <Info />
                          </div>
                          <div className='col-sm-7 form'>
                              <Form city = { city } updateCity = { this.updateCity } getWeather = {this.getWeather}/>
                              <Weather
                                  temp = { temp }
                                  city = { city }
                                  country = { country }
                                  pressure = { pressure }
                                  error = { error }
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default App;



// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;
