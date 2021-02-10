import requests
import os


def weather_api(city):
    """ Calls the open weather API"""

    # if API_KEY is not found, throwns
    API_KEY = os.environ.get("API_KEY")
    r = requests.get(
        f"https://api.openweathermap.org/data/2.5/forecast?q={city},BR&appid={API_KEY}"
    )
    return r.json()


if __name__ == "__main__":
    weather_api("São Paulo")
