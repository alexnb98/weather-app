import sunny from '../img/sunny.png'
import rain from '../img/rain.png'
import cloudy from '../img/cloudy.png'

export const chooseIcon = icon_id => {
    switch (icon_id) {
        case 800:
            return sunny
        case  802:
            return cloudy    
        default:
            return rain
    }
}

export const kelvinToCelcius = (kelvin) => {
    return (kelvin - 273.15).toFixed()
}