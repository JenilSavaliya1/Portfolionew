// netlify/functions/weather.js
const axios = require('axios');

exports.handler = async function(event, context) {
    const apiKey = 'c7947e91255044b293afb8b1755be499'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Halifax,CA&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        return {
            statusCode: 200,
            body: JSON.stringify({
                city: data.name,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                icon: data.weather[0].icon
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error fetching weather data" })
        };
    }
};
