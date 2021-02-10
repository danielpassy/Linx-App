import Cookies from 'js-cookie'
export const API_URL = "http://localhost:3000/api/v1/"

export const API = {
    csfr: API_URL + 'csrf_token/',
    post: (method) => API_URL + `upload_${method}/`,
    submit_city: API_URL + `correct/`
}

export function getHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
    }
}

