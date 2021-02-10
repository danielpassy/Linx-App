import requests
import os


def weather_api(city):
    """ Calls the open weather API"""

    def extract_data(response):
        """
        Extract  data from API response

        Extract 5 data points from the response, to simplify the data storage and transmission
        The points choosen are 0/8/16/24/32/40, to make sure that today is always the right time,
        even at 23:59
        """

        extracted_data = {"cod": response["cod"], "city": response["city"], "data": []}

        for i in range(5):
            extracted_data["data"].append(response["list"][i * 8])
        return extracted_data

    API_KEY = os.environ.get("API_KEY")
    r = requests.get(
        f"https://api.openweathermap.org/data/2.5/forecast?q={city},BR&appid={API_KEY}"
    )
    r = r.json()
    
    # if the API call failed, let the view handle it
    if r["cod"] != '200':
        return r

    # else, process it
    return extract_data(r)


if __name__ == "__main__":
    weather_api("São Paulo")
