# WeatherXpress

Este proyecto es una aplicación web construida con React.js que permite consultar el clima actual en cualquier ciudad del mundo.

## Funcionalidades

- **Buscar clima por ciudad**: Puedes introducir el nombre de cualquier ciudad y obtener el clima actual.
- **Visualización de datos**: Muestra la temperatura, humedad, viento y condiciones generales del clima.
- **Interfaz amigable**: Una interfaz limpia y fácil de usar.

## Tecnologías utilizadas

- **React.js**: Para construir la interfaz de usuario.
- **Axios**: Para hacer peticiones HTTP a la API del clima.
- **API de OpenWeatherMap**: Para obtener los datos meteorológicos.
- **Moment.js**: Para formatear fechas y horas.
- **React-router-dom**: Para manejar la navegación entre diferentes vistas o páginas dentro de la aplicación web.

## Instalación

### Requisitos previos

Asegúrate de tener instalado Node.js y npm (o yarn) en tu máquina.

1. Clona el repositorio:

   ```bash
   git clone https://github.com/zoriregueiro/WeatherXpress.git
   cd WeatherApp
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Obtén una API Key de [OpenWeatherMap](https://openweathermap.org/api) y agrega tu clave en el archivo `.env` (crea este archivo en la raíz del proyecto si no existe). Ejemplo:

   ```bash
   VITE_API_KEY=tu_clave_api
   ```

4. Añade a tu `.env` la url para obtener los iconos del tiempo:

VITE_ICON_WEATHER = https://openweathermap.org/img/wn/

5. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:3000`.

## Uso

1. Al abrir la aplicación, verás un campo de búsqueda donde puedes ingresar el nombre de una ciudad.
2. Haz clic en el botón "Search" o presiona Enter para obtener el clima actual de esa ciudad.
   3.Seleciona uno de tus favoritos (en caso de tener ya alguno guardado)
3. Los datos del clima, como la temperatura, la humedad y las condiciones, se mostrarán en la pantalla.
4. Marca como favorito esa ciudad en la estrellita de la caja principal.
5. En esta última pantalla se puede buscar otras ciudades.
6. Vuelve a la home haciendo click en el logo o recargando la página actual.
7. En ambas pantallas se puede modificar la unidad de medida de los grados, lo cual repercute en otros datos.
