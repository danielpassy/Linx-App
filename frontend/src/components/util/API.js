import Cookies from 'js-cookie'
export const API_URL = "http://localhost:3000/api/v1/"

export const API_END_POINTS = {
    csfr: API_URL + 'csrf_token/',
    getWeather: API_URL + `get_weather/`,
    history: API_URL + `history/`
}

export function getHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
    }
}

