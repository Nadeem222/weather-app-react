import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios'

const api = {
  key : "5e8cb2874330f87f5695ebbb128be484",
  base : "https://api.openweathermap.org/data/2.5/"

}


function App() {

    const [query, setQuery] = useState('');
    const [weather , setWeather] = useState({});

    const search = evt =>{
      if (evt.key === "Enter"){
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
          .then(result =>{ 
            setQuery('')
            setWeather (result);
            console.log(result)
          });

      }
    }
  
  // const dateBuilder = (d) =>{
  //   let months = ["january" , "febuary" ,"march" , "April", "May" , "June", "July", "August" , "September" ,"October" , "November", "Decemebr"];
  //   let days = ["Sunday" , "Monday" , "Tuesday" , "wednesday" ,"Thursday" , "Friday" , "Saturday"];

  //   let day = days[d.getDays()];
  //   let date = d.getDate();
  //   let month = months[d.getMonths()];
  //   let year = d.getFullYear()
  //     return `${day} , ${date} , ${month}, ${year}`
  // };

  return(
  <div className={
    (typeof weather.main != "undefined")
    ? ((weather.main.temp > 16)
    ?'app warm'
    : 'app')
    : 'app'}>
    <main>
      <div className='search-box'>
        <input type="text" 
        className='search-bar'
        placeholder='search....'
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />
      </div>
      {(typeof weather.main != "undefined" ) ? (
      <div>
        <div className="location-box">
          <div className="location">{weather.name},{weather.sys.country}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°c
          </div>
          <div className="weather">{weather.weather[0].main}
          <br />
          Feels-Like{Math.round(weather.main.feels_like)}°c
          </div>
        </div>
      </div>
      ): ('')}
    </main>
  </div>
  
  );
}

export default App;
