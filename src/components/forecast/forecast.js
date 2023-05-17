import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { motion } from 'framer-motion';
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));

    return (
        <>
            <label className="title">7 Day Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <motion.div className="dailyItem" whileHover={{
                                    scale: 1.01,
                                    transition: { duration: 0.2 },
                                }}>
                                    <img alt="weatherIcon" className="iconSmall" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[index]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="temp">{Math.round(item.main.temp)}°C</label>
                                </motion.div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="dailyDetailsGrid">
                                <div className="dailyDetailsGridItem">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="dailyDetailsGridItem">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="dailyDetailsGridItem">
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="dailyDetailsGridItem">
                                    <label>Wind Speed:</label>
                                    <label>{item.wind.speed} M/S</label>
                                </div>
                                <div className="dailyDetailsGridItem">
                                    <label>Sea Level:</label>
                                    <label>{item.main.sea_level} M</label>
                                </div>
                                <div className="dailyDetailsGridItem">
                                    <label>Feels Like:</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}

export default Forecast;