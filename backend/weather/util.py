import requests
import os

def weather_api(city):
    """ Calls the open weather API"""

    # if API_KEY is not found, throwns 
    API_KEY = os.environ("API_KEY")
    r = requests.get(f'https://api.openweathermap.org/data/2.5/forecast?q={city},BR&appid=5b84e3d69b41asd91f5f7c3f38b9e')
    print( r.json())


if __name__ == "__main__":
    weather_api('São Paulo')