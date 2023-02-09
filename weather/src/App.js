
import coldBg from "./assets/cold.jpg";
import "./index.css";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";

function App() {
  
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('istanbul');
      setWeather(data);
    };

    fetchWeatherData();
  }, []);
  
  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg}) ` }}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
          < div className="section section__inputs">
             <input type="text" name="city" placeholder="Enter City..." />
             <button>°C</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.iconURL} alt="weatherIcon" />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>12 °C</h1>
            </div>
          </div>

          {/*bottom description*/}
          <descriptions />
         </div>
          )

        }
        </div>
       </div>
  );
}

export default App;
