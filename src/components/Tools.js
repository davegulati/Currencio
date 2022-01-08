import React from 'react'

const Tools = () => {
    return (
        <div className="bg-light">
            <div className="container p-5">
                <h1 className="text-center text-dark pb-2">Tools</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <div className='card text-center m-2'>
                            <div className='fs-1 mt-2'><i className="fab fa-react"> <i className="fab fa-bootstrap"></i></i></div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Front-End
                                </h5>
                                <div className="card-text">
                                    Currencio is built using <a href="https://reactjs.org/" target='_blank' rel='noopener noreferrer'>React</a> and <a href="https://getbootstrap.com/" target='_blank' rel='noopener noreferrer'>Bootstrap</a>!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='card text-center m-2'>
                            <div className='fs-1 mt-2'><i className="fas fa-database"></i></div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    API
                                </h5>
                                <div className="card-text">
                                    Currencio is powered by <a href="https://github.com/fawazahmed0/currency-api" target='_blank' rel='noopener noreferrer'>Fawaz Ahmed's Currency API</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='card text-center m-2'>
                            <div className='fs-1 mt-2'><i className="fab fa-github"></i></div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Source Code
                                </h5>
                                <div className="card-text">
                                    View the <a href="https://github.com/davegulati/Currencio" target='_blank' rel='noopener noreferrer'>GitHub repository</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools
