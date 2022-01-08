import React, { useState, useEffect } from 'react'
import API from '../api/API';
import '../css/currency-flags.css'

const CurrencyConverter = () => {
    const [loading, setLoading] = useState(false);
    const [currencies, setCurrencies] = useState([]);
    const [baseCurrency, setBaseCurrency] = useState(null);
    const [conversionCurrency, setConversionCurrency] = useState(null);
    const [baseCurrencyRates, setBaseCurrencyRates] = useState(null);
    const [conversionCurrencyRates, setConversionCurrencyRates] = useState(null);

    // Inputs
    const [baseCurrencyAmount, setBaseCurrencyAmount] = useState(0);

    const getCurrencies = async () => {
        setLoading(true);
        const response = await fetch(API.currenciesURL);
        const returnedCurrencies = await response.json();
        let tempArray = [];
        for (const property in returnedCurrencies) {
            tempArray.push({
                currencyCode: property,
                currencyName: returnedCurrencies[property]
            });
        }
        setCurrencies(tempArray);
        setLoading(false);
    }

    useEffect(() => {
        if (baseCurrency !== null) {
            // Update Base currency rates
            fetch(API.currencyRatesURL + baseCurrency + '.json')
                .then(response => response.json())
                .then(data => {
                    setBaseCurrencyRates(data[baseCurrency]);
                })
        }
    }, [baseCurrency]);

    useEffect(() => {
        if (conversionCurrency !== null) {
            // Update Conversion currency rates
            fetch(API.currencyRatesURL + conversionCurrency + '.json')
                .then(response => response.json())
                .then(data => {
                    setConversionCurrencyRates(data[conversionCurrency]);
                })
        }
    }, [conversionCurrency]);

    useEffect(() => {
        getCurrencies();
    }, []);

    return (
        <>
            {loading ?
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="loader"></div>
                </div> :
                <>
                    <div className='container card bg-light mb-5 p-4'>
                        <div className='row g-sm-3 g-lg-4 align-items-center'>
                            {/* Amount Input */}
                            <div className='col-lg-3'>
                                <label htmlFor='amount' className='form-label'>Amount</label>
                                <input type='number' className='form-control' id='amount' onChange={(event) => {
                                    if (event.target.value === '') {
                                        setBaseCurrencyAmount(0);
                                    }
                                    else {
                                        setBaseCurrencyAmount(event.target.value);
                                    }
                                }} />
                            </div>

                            {/* From Dropdown */}
                            <div className='col-lg-4'>
                                <label htmlFor='baseCurrencyDropdownButton' className='form-label'>From</label>
                                <div className='dropdown'>
                                    <button className='btn white-button text-start dropdown-toggle overflow-hidden text-capitalize w-100' type='button' id='baseCurrencyDropdownButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                        Select
                                    </button>
                                    <div className='dropdown-menu overflow-auto currency-dropdown' aria-labelledby='baseCurrencyDropdownButton'>
                                        {currencies.map((currency) => {
                                            return (
                                                <>
                                                    <button key={currency.currencyCode} className='dropdown-item text-capitalize overflowx-auto' value={currency.currencyCode} onClick={() => {
                                                        document.getElementById('baseCurrencyDropdownButton').innerHTML = `<span class='currency-flag currency-flag-${currency.currencyCode}'></span> ${currency.currencyCode.toUpperCase()} - ${currency.currencyName}`;
                                                        setBaseCurrency(currency.currencyCode);
                                                    }}><span className={'currency-flag currency-flag-' + currency.currencyCode}></span> {currency.currencyCode.toUpperCase()} - <span className='text-secondary'>{currency.currencyName}</span> </button>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Swap Button */}
                            <div className='col-lg-1'>
                                <label htmlFor='swap-button' className='form-label'>Swap</label>
                                <button id='swap-button' className='d-block btn btn-info w-100' onClick={() => {
                                    // Update UI
                                    let previousBaseCurrencyDropdownButton = document.getElementById('baseCurrencyDropdownButton').innerHTML;
                                    document.getElementById('baseCurrencyDropdownButton').innerHTML = document.getElementById('conversionCurrencyDropdownButton').innerHTML
                                    document.getElementById('conversionCurrencyDropdownButton').innerHTML = previousBaseCurrencyDropdownButton;

                                    // Update currencies
                                    let previousBaseCurrency = baseCurrency;
                                    setBaseCurrency(conversionCurrency);
                                    setConversionCurrency(previousBaseCurrency);
                                }}><i className="fas fa-sync"></i></button>
                            </div>

                            {/* To Dropdown */}
                            <div className='col-lg-4'>
                                <label htmlFor='conversionCurrencyDropdownButton' className='form-label'>To</label>
                                <div className='dropdown'>
                                    <button className='btn white-button text-start dropdown-toggle overflow-hidden text-capitalize w-100' type='button' id='conversionCurrencyDropdownButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                        Select
                                    </button>
                                    <div className='dropdown-menu overflow-auto currency-dropdown' aria-labelledby='conversionCurrencyDropdownButton'>
                                        {currencies.map((currency) => {
                                            return (
                                                <>
                                                    <button key={currency.currencyCode} className='dropdown-item text-capitalize overflowx-auto' value={currency.currencyCode} onClick={() => {
                                                        document.getElementById('conversionCurrencyDropdownButton').innerHTML = `<span class='currency-flag currency-flag-${currency.currencyCode}'></span> ${currency.currencyCode.toUpperCase()} - ${currency.currencyName}`;
                                                        setConversionCurrency(currency.currencyCode);
                                                    }}><span className={'currency-flag currency-flag-' + currency.currencyCode}></span> {currency.currencyCode.toUpperCase()} - <span className='text-secondary'>{currency.currencyName}</span> </button>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            {baseCurrency && conversionCurrency && baseCurrencyRates && conversionCurrencyRates ?
                                <div className='text-dark text-center fs-3 fw-bold mt-4'>
                                    <p className='m-0 p-0'>{baseCurrencyAmount} {baseCurrency.toUpperCase()} = {baseCurrencyRates[conversionCurrency] * baseCurrencyAmount} {conversionCurrency.toUpperCase()}</p>
                                </div> : <></>
                            }

                            {baseCurrency && conversionCurrency && baseCurrencyRates && conversionCurrencyRates ?
                                <div className='text-dark text-center fs-3 mt-2'>
                                    {/* <div className='lead'>Exchange Rates</div> */}
                                    <p className='lead m-0 p-0'>1 {baseCurrency.toUpperCase()} = {baseCurrencyRates[conversionCurrency]} {conversionCurrency.toUpperCase()}</p>
                                    <p className='lead m-0 p-0'>1 {conversionCurrency.toUpperCase()} = {conversionCurrencyRates[baseCurrency]} {baseCurrency.toUpperCase()}</p>
                                </div> : <></>
                            }
                        </div>
                    </div>
                </>
            }

        </>
    )
}

export default CurrencyConverter
