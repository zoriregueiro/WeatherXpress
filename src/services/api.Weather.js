import axios from "axios";

const { VITE_API_KEY } = import.meta.env;

export const getWeatherDataApi = async (city, unit, lang) => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          appid: VITE_API_KEY,
          q: city,
          units: unit,
          lang: lang,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al recuperar los datos del tiempo actual");
  }
};

export const getWeatherHourly = async (lat, lon, unit) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?`,
      {
        params: {
          appid: "3d352759f46a079edccbcdf0faa63d3f",
          lat: lat,
          lon: lon,
          units: unit,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al recuperar los datos de pronóstico");
  }
};
