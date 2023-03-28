import axios from "axios";

const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = `0502d8aa326c1097550fc718240c644b`;

export const getWeather = async (city, country) => {
  try {
    let response = await axios.get(
      `${API_URL}?q=${city},${country}&appid=${API_KEY}`
    );
    
    return response.data;
  } catch (error) {
    console.log("error while calling the api", error);
  }
};

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
