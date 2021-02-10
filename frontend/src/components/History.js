import { React, useState, useEffect } from 'react'

export default function History() {

    const [spinner, setSpinner] = useState(True)

    useEffect(() => {

    }, [])


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
