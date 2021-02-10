import { React, useState, useEffect } from 'react'
import axios from 'axios'
import DatePicker from 'react-date-picker';
import CSRF from './util/CSRF'
import { API_END_POINTS, getHeaders } from './util/API'


const maxDate = () => {
    let aDate = new Date();
    let forcastDays = 4;
    aDate.setDate(aDate.getDate() + forcastDays);
    return aDate
}


export default function Home() {

    const [city, setCity] = useState("");
    const [date, setDate] = useState(new Date())
    const [page, setPage] = useState(0)
    const [error, setError] = useState(false);
    const [spinner, setSpinner] = useState(false)
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        // update the page number 

        if (forecast) {
            let oneDay = 24 * 60 * 60 * 1000;
            let firstDate = new Date(); // 29th of Feb at noon your timezone
            let secondDate = date; // 2st of March at noon

            setPage(Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay))))
            console.log(Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay))))
        }

    }, [forecast, date])

    function handleChange(event) {
        setCity(event.target.value);
    }

    async function submitForm() {

        // prevent submission without a City input
        if (!city) { return }
        setSpinner(true)
        let response
        try {
            response = await axios.post(API_END_POINTS['getWeather'], { 'city': city })
            if (response['status'] === 200) {
                setForecast(response.data)
            }
        }
        catch (err) {
            console.log(err.response)
            if (err.response['status'] === 400) {
                setError(err.response.data)
            }
        }
        finally { setSpinner(false) }
    }

    let spinnerContainer = spinner ? <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> : ""

    let errorContainer = error ? <div className="alert alert-danger" role="alert">
        {error}
    </div> : ""


    const resultsContainer = forecast ?
        <div className="results">
            <p className="d-inline-block text-left">
                <label for="city" className='mb-0'>Dia:</label>
                <DatePicker
                    onChange={setDate}
                    value={date}
                    className=' mr-3 d-block'
                    required={true}
                    locale={"pt-Br"}
                    maxDate={maxDate()}
                    minDate={new Date()}
                />
            </p>
            <div id="forecast">
                <div className="subTitle">{(forecast['data'][page]['main']['temp'])} ºC</div>
                <div className="image">{(forecast['data'][page]['weather'][0]['description'])}</div>
                <div className="precipitacao"></div>
            </div>
        </div>
        : ""


    return (
        <div id="home">
            <div className="container">
                <div className='pt-3'>
                    <div className="row p-0 m-0">
                        <div className="col-12 col-md-6">
                            <p className='title text-left'>
                                Previsão do Tempo
                            </p>
                            <p className="subTitle text-left">Escolha uma cidade brasileira</p>
                        </div>
                        <div className="col-12 col-md-6 pt-10vh">
                            {errorContainer}
                            <form onSubmit={(e) => e.preventDefault()}>
                                <CSRF />
                                <span className="d-inline-block text-left">
                                    <label for="city" className='mb-0'>Cidade:</label>

                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <input type="text"
                                                name="city"
                                                id="city"
                                                value={city}
                                                onChange={(handleChange)}
                                                className=' mr-3 d-block form-control'
                                                placeholder='Rio de Janeiro'
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default" />
                                        </div>
                                    </div>
                                </span>

                                <input type="button" className='m-3 btn btn-primary' onClick={submitForm} value="buscar" />
                            </form>
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
