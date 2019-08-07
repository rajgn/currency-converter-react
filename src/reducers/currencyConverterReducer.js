import {
    CHANGE_TGT_CURRENCY_VALUE,
    CHANGE_TGT_CURRENCY_COUNTRY,
    CHANGE_SRC_CURRENCY_VALUE,
    CHANGE_SRC_CURRENCY_COUNTRY,
    FETCH_CURRENCY_CONVERTER_RATES_FAILURE,
    FETCH_CURRENCY_CONVERTER_RATES_SUCCESS,
    FETCH_CURRENCY_CONVERTER_RATES_REQUEST
} from '../actions/actionTypes';

const initialState = {
    sourceCurrencyType: 'USD',
    sourceCurrencyValue: '',
    targetCurrencyType: 'EUR',
    targetCurrencyValue: ''
};

export const currencyConverterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SRC_CURRENCY_COUNTRY: {
            return {
                ...state,
                sourceCurrencyType: action.payload
            };
        }
        case CHANGE_SRC_CURRENCY_VALUE: {
            return {
                ...state,
                sourceCurrencyValue: action.payload
            };
        }
        case CHANGE_TGT_CURRENCY_COUNTRY: {
            return {
                ...state,
                targetCurrencyType: action.payload
            };
        }
        case CHANGE_TGT_CURRENCY_VALUE: {
            return {
                ...state,
                targetCurrencyValue: action.payload
            };
        }
        default:
            return state;
    }
};

const initialCurrencyData = {
    isFetching: false,
    data: 0,
};

export const getConvertedRates = (state = initialCurrencyData, action) => {
    switch (action.type) {
        case FETCH_CURRENCY_CONVERTER_RATES_REQUEST: {
            return {
                ...state,
                isFetching: true
            };
        }

        case FETCH_CURRENCY_CONVERTER_RATES_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: Object.values(action.payload)
            };
        }

        case FETCH_CURRENCY_CONVERTER_RATES_FAILURE: {
            return {
                ...state,
                isFetching: false,
            };
        }

        default:
            return state;
    }
};