import React from 'react';
import Info from './compoents/info';
import Form from './compoents/form';
import Weather from './compoents/weather';

const API_KEY = 'd0506592bdc0b24fa1263b8464673a02';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    };

    gettingWeather = async (event) => {
        event.preventDefault();

        const city = event.target.elements.city.value;

        if (city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            console.log(data);

            let sunset = data.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            let sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: sunset_date,
                error: undefined
            });
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: 'Please! Enter city name!'
            });
        }

    };

    render(){
        return(
          <div className='wrapper'>
              <div className="main">
                  <div className="container">
                      <div className="row">
                          <div className='col-sm-5 info'>
                              <Info />
                          </div>
                          <div className='col-sm-7 form'>
                              <Form getWeather = {this.gettingWeather}/>
                              <Weather
                                  temp = {this.state.temp}
                                  city = {this.state.city}
                                  country = {this.state.country}
                                  pressure = {this.state.pressure}
                                  sunset = {this.state.sunset}
                                  error = {this.state.error}
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
