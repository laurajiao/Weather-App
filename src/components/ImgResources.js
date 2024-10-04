
import sunnyDay from '../assets/background/Sunny_day_background.png'
import cloudyDay from '../assets/background/Cloudy_day_background.png'
import rainBackground from '../assets/background/Rain_background.png'
import hailBackground from '../assets/background/Hail_background.png'
import snowBackground from '../assets/background/Snow_background.png'


import sunnyIcon from '../assets/weather_icon/Sunny.png';
import cloudyIcon from  '../assets/weather_icon/Cloudy.png';
import rainIcon from  '../assets/weather_icon/Rain.png';
import hailIcon from  '../assets/weather_icon/Hail.png';
import snowIcon from  '../assets/weather_icon/Snow.png';


export const weatherBackgroundMap  = {
    Sunny: sunnyDay,
    Cloudy: cloudyDay,
    Overcast:cloudyDay,
    Rain: rainBackground,
    Hail: hailBackground,
    Snow: snowBackground,
};


export const weatherIconsMap = {
    Sunny: sunnyIcon,
    Cloudy: cloudyIcon,
    Overcast:cloudyIcon,
    Rain: rainIcon,
    Hail: hailIcon,
    Snow: snowIcon,
};

const blueGradient = 'linear-gradient(to bottom, rgba(145, 182, 253,0.3) 30%, rgba(63, 126, 245,0.3))';
const purpleGradient = 'linear-gradient(to bottom, rgba(131, 154, 239,0.3) 30%, rgba(95, 76, 219,0.3))';

export const weatherGradient={
    Sunny: blueGradient,
    Cloudy:  blueGradient,
    Overcast:  blueGradient,
    Rain: purpleGradient,
    Hail:purpleGradient,
    Snow:purpleGradient,
}

export function getWeatherCategory(condition) {
    const normalizedCondition = condition.toLowerCase();  

    if (normalizedCondition.includes('cloud','overcast')) {
        return 'Cloudy';
    } else if (normalizedCondition.includes('rain')) {
        return 'Rain';
    } else if (normalizedCondition.includes('snow')) {
        return 'Snow';
    } else if (normalizedCondition.includes('hail')) {
        return 'Hail';
    } else if (normalizedCondition.includes('sun') || normalizedCondition.includes('clear')) {
        return 'Sunny';
    } else {
        return 'Cloudy'; 
    }
}