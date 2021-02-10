import { React, useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-date-picker';
import CSRF from './util/CSRF'
import { API_END_POINTS, getHeaders } from './util/API'

export default function Home() {

    const [city, setCity] = useState("");
    const [date, setDate] = useState(new Date())
    const [error, setError] = useState(null);
    const [forecast, setForecast] = useState(null);

    function handleChange(event) {
        setCity(event.target.value);
    }

    async function submitForm() {
        console.log(date)
        let response = await axios.get(API_END_POINTS[city, date])
        if (response['status'] === 200) {
            setForecast(response.data)
        }
        else if (response['status'] === 404) {
            setError(response.error)
        }
    }

    const errorContainer = error ? <div class="alert alert-danger" role="alert">
        {error}
    </div> : ""

    const results = forecast ? <div className="row">
        <div className="col-12">
            <spam className="d-inline-block text-left">
                <label for="city" className='mb-0'>Dia:</label>
                <DatePicker
                    onChange={setDate}
                    value={date}
                    className=' mr-3 d-block'
                    required={true}
                    locale={"pt-Br"}
                />
            </spam>
        </div>
    </div> : ""

    return (
        <div id="home">
            <div className="container">
                <div className='pt-3'>
                    <div className="row p-0 m-0">
                        <div className="col-12 col-md-6">
                            <p className='title text-left'>
                                Previsão do Tempo
                            </p>
                            <p className="subTitle text-left">Escolha uma city no Brasil</p>
                        </div>
                        <div className="col-12 col-md-6 pt-10vh">
                            {errorContainer}
                            <form onSubmit={submitForm} method='post'>
                                <CSRF />
                                <span className="d-inline-block text-left">
                                    <label for="city" className='mb-0'>Cidade:</label>
                                    <input type="text"
                                        name="city"
                                        id="city"
                                        value={city}
                                        onChange={(handleChange)}
                                        className=' mr-3 d-block'
                                        placeholder='Rio de Janeiro' />
                                </span>

                                <input type="button" className='m-3' onClick={submitForm} value="buscar" />
                            </form>
                        </div>
                    </div>
                    {results}
                </div>
            </div>
        </div>
    )
}
