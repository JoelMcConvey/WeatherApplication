import "./currentWeather.css";
import { motion } from 'framer-motion';

const CurrentWeather = ({ data }) => {
    return (
        <motion.div className="weather" whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
        }}>
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weatherDescription">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weatherIcon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temprature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameterRow">
                        <span className="parameterLabel heading">Details</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Feels Like</span>
                        <span className="parameterValue">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Wind</span>
                        <span className="parameterValue">{data.wind.speed} M/S</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Humidity</span>
                        <span className="parameterValue">{data.main.humidity}%</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Pressure</span>
                        <span className="parameterValue">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default CurrentWeather;