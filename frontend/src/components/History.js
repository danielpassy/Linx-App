import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { API_END_POINTS } from './util/API'
import DatePicker from 'react-date-picker';


export default function History() {

    const [spinner, setSpinner] = useState(true)
    const [error, setError] = useState(false);
    const [forecast, setForecast] = useState(null);




    useEffect(() => {
        axios.get(API_END_POINTS['history'])
            .then((response) => {
                setForecast(response.data)
            })
            .catch((err) => {
                setError("Houve problemas na conexão, tente novamente dentro de alguns minutos")
            })
            .finally(() => {
                setSpinner(false)
            })
    }, [])


    let resultsContainer = []
    if (forecast) {
        forecast.forEach((entry) => {
            resultsContainer.push(
                <div className="row">
                    <div className="col-6 p-3">
                        <div className="subTitle">{entry['city']}</div>
                        <div className="subTitle">{entry['timestamp'].slice(10, )}</div>
                    </div>
                    <div className="col-6">
                        <div className="results">
                            <p className="d-inline-block text-left">
                                <label for="city" className='mb-0'>Dia:</label>
                            </p>
                            <div id="forecast">
                                <div className="subTitle">{(entry['data'][0]['main']['temp'])} ºC</div>
                                <div className="image">{(entry['data'][0]['weather'][0]['description'])}</div>
                                <div className="precipitacao"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    let errorContainer = error ? <div className="alert alert-danger" role="alert">
        {error}
    </div> : ""
    let spinnerContainer = spinner ? <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> : ""
    return (
        <div id="home">
            <div className="container">
                <div className='pt-3'>
                    <div className="row p-0 m-0">
                        <div className="col-12 col-md-6 pt-10vh">
                            {errorContainer}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {spinnerContainer}
                            {resultsContainer}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
