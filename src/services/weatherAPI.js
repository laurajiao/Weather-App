export async function fetchWeather(city) {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const API = process.env.REACT_APP_WEATHER_API_API;
    const response = await fetch(`${API}?key=${API_KEY}&q=${city}&days=5&aqi=yes&alerts=yes`);

    if (response.ok) {

        const data = await response.json();
        return data;
    } else {
        console.error("Error fetching data:", response.statusText);
    }
}




