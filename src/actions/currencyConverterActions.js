import {
    FETCH_CURRENCY_CONVERTER_RATES_FAILURE,
    FETCH_CURRENCY_CONVERTER_RATES_REQUEST,
    FETCH_CURRENCY_CONVERTER_RATES_SUCCESS
} from './actionTypes';

import {getService} from '../api/dataService';

const fetchCurrencyConverterRatesRequest = () => ({
    type: FETCH_CURRENCY_CONVERTER_RATES_REQUEST,
});

const fetchCurrencyConverterRatesSuccess = (response) => {
    if (response.data) {
        return {
            type: FETCH_CURRENCY_CONVERTER_RATES_SUCCESS,
            payload: response.data,
        };
    } else {
        return fetchCurrencyConverterRatesFailure(response);
    }
};

const fetchCurrencyConverterRatesFailure = (error) => ({
    type: FETCH_CURRENCY_CONVERTER_RATES_FAILURE,
    payload: error,
});

export const fetchCurrencyConverterRates = (srcValue, tgtValue) => {
    const actions = {
        requestAction: fetchCurrencyConverterRatesRequest,
        successAction: fetchCurrencyConverterRatesSuccess,
        failureAction: fetchCurrencyConverterRatesFailure,
    };
    const options = {
        actions: actions,
        shouldRequest: true,
    };

    return getService(srcValue, tgtValue, options);
};