import { useEffect, useState } from "react";
import { defaultLoading } from "../constants/defaultStates";
import { getWeatherDataApi, getWeatherHourly } from "../services/api.Weather";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const useWeatherData = () => {
  const navigate = useNavigate();
  const [favCities, setFavCities] = useState([]);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(defaultLoading);
  const [unit, setUnit] = useState("metric");
  const [weatherHourly, setWeatherHourly] = useState([]);

  useEffect(() => {
    const savedCities = JSON.parse(localStorage.getItem("favCities"));
    if (savedCities) {
      setFavCities(savedCities);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favCities", JSON.stringify(favCities));
  }, [favCities]);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);

      if (city === "") {
        setError("Please enter the name of a city.");
        return;
      }

      try {
        setLoading((prev) => ({ ...prev, weather: true }));

        const currentData = await getWeatherDataApi(city, unit, "es");

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
        const locationCity = currentData.name.replace(/\s+/g, "");
        const hourlyData = await getWeatherHourly(lat, lon, unit);

        const groupByDayAsArray = (data) => {
          const grouped = data.reduce((acc, item) => {
            const day = moment(item.dt * 1000).format("YYYY-MM-DD");
            if (!acc[day]) acc[day] = [];
            acc[day].push(item);
            return acc;
          }, {});

          return Object.entries(grouped).map(([date, items]) => ({
            date,
            items,
          }));
        };

        setWeatherHourly(groupByDayAsArray(hourlyData.list));
        setError("");
        navigate(`/weather-view/${locationCity}`);
      } catch (err) {
        setError("City not found or error in the request.");
        setWeatherData(null);
        setWeatherHourly(null);
      } finally {
        setLoading((prev) => ({ ...prev, weather: false }));
      }
    };
    getWeatherData();
  }, [city, unit]);

  const handleOnChangeCity = (item) => {
    setCity(item);
  };

  const handleOnChangeUnit = (unit) => {
    setUnit(unit);
  };

  const handleAddCiudad = (selectedCity) => {
    if (!favCities.includes(selectedCity)) {
      setFavCities([...favCities, selectedCity]);
    }
  };

  const handleDeleteCiudad = (cityToDelete) => {
    setFavCities(favCities.filter((item) => item !== cityToDelete));
  };

  const handleDeleteData = () => {
    try {
      setLoading((prev) => ({ ...prev, clean: true }));
      setCity("");
      setWeatherData("");
      setError("");
      navigate("/");
    } catch (error) {
      addToast({
        title: t("Error"),
        type: "error",
        description: t("Error clearing data"),
      });
    } finally {
      setLoading((prev) => ({ ...prev, clean: false }));
    }
  };

  return {
    weatherData,
    city,
    favCities,
    unit,
    weatherHourly,
    handleDeleteData,
    handleOnChangeCity,
    handleOnChangeUnit,
    handleAddCiudad,
    handleDeleteCiudad,
    loading,
    error,
  };
};
