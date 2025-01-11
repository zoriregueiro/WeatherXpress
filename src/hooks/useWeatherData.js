import { useEffect, useState } from "react";
import { defaultLoading } from "../constants/defaultStates";
import { getWeatherDataApi, getWeatherHourly } from "../services/api.Weather";
import { useNavigate } from "react-router-dom";

export const useWeatherData = () => {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(defaultLoading);
  const [unit, setUnit] = useState("metric");
  const [weatherHourly, setWeatherHourly] = useState([]);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);

      if (city === "") {
        setError("Por favor ingresa el nombre de una ciudad.");
        return;
      }

      try {
        setLoading((prev) => ({ ...prev, weather: true }));

        const currentData = await getWeatherDataApi(city, unit, "es");
        console.log(currentData);

        setWeatherData({
          temp: currentData.main.temp,
          icon: currentData.weather[0].icon,
          humidity: currentData.main.humidity,
          wind: currentData.wind.speed,
          hour: currentData.dt,
          description: currentData.weather[0].description,
          city: currentData.name,
          country: currentData.sys.country,
        });
        const lat = currentData.coord.lat;
        const lon = currentData.coord.lon;

        console.log(lat, lon);

        const hourlyData = await getWeatherHourly(lat, lon, unit);

        console.log(hourlyData);

        const customArray = hourlyData?.list?.map((item) => ({
          temp: item.main.temp,
          icon: item.weather[0].icon,
          humidity: item.main.humidity,
          wind: item.wind.speed,
          hour: item.dt,
          description: item.weather[0].description,
        }));
        const location = currentData.name;

        setWeatherHourly(customArray);
        setError("");
        navigate(`/weather-view`);
      } catch (err) {
        console.log(err);
        setError("Ciudad no encontrada o error en la petición.");
        setWeatherData(null);
        setWeatherHourly(null);
      } finally {
        setLoading((prev) => ({ ...prev, weather: false }));
      }
    };
    getWeatherData();
  }, [city]);

  const handleOnChangeCity = (item) => {
    setCity(item);
  };

  const handleOnChangeUnit = (unit) => {
    setUnit(unit);
  };

  const handleDeleteData = () => {
    setLoadingDelete(true);
    try {
      setLoading((prev) => ({ ...prev, clean: true }));
      setCity("");
      setWeatherData("");
      setError("");
    } catch (error) {
      addToast({
        title: t("Error"),
        type: "error",
        description: t("Error al limpiar los datos"),
      });
    } finally {
      setLoading((prev) => ({ ...prev, clean: false }));
    }
  };

  return {
    weatherData,
    city,
    unit,
    weatherHourly,
    handleDeleteData,
    handleOnChangeCity,
    handleOnChangeUnit,
    loading,
    error,
  };
};