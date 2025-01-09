import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { defaultLoading } from "../constants/defaultStates";
import { apiKey } from "../constants/Api";

export function useWeatherData() {
  const { t } = useTranslation();

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(defaultLoading);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);

      if (city.trim() === "") {
        setError("Por favor ingresa el nombre de una ciudad.");
        return;
      }

      try {
        setLoading((prev) => ({ ...prev, weather: true }));
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
        setError("");
      } catch (err) {
        setError("Ciudad no encontrada o error en la petición.");
        setWeatherData(null);
      } finally {
        setLoading((prev) => ({ ...prev, weather: false }));
      }
    };
    getWeatherData();
  }, [city]);

  const handleOnChangeCity = (item) => {
    setCity(item);
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
    handleDeleteData,
    handleOnChangeCity,
    loading,
    error,
  };
}
