import { React, useState } from 'react'
import axios from 'axios'
import CSRF from './util/CSRF'
import { API_URL, getHeaders } from './util/API'

export default function Home() {

    const [cidade, setCidade] = useState("");

    function handleChange(event) {
        setCidade(event.target.value);
    }

    function submitForm() {
        axios.post(API_URL.submitCity)



    }
    return (
        <div id='home'>
            <p className='Title'>
                Previsão do Tempo
            </p>
            <p className="subTitle">Escolha uma cidade no Brasil</p>
            <form onSubmit={submitForm} method='post'>
                <CSRF />
                <input type="text"
                    name="cidade"
                    id="cidade"
                    value={cidade}
                    onChange={(handleChange)} />
                <input type="button" value="buscar" />
            </form>

        </div>
    )
}
