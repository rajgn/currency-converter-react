import {
    CHANGE_SRC_CURRENCY_COUNTRY,
    CHANGE_SRC_CURRENCY_VALUE,
    CHANGE_TGT_CURRENCY_COUNTRY,
    CHANGE_TGT_CURRENCY_VALUE
} from './actionTypes';

export const changeSourceCurrencyCountry = (payload) => {
    return {
        type: CHANGE_SRC_CURRENCY_COUNTRY,
        payload
    };
};

export const changeSourceCurrencyValue = (payload) => {
    return {
        type: CHANGE_SRC_CURRENCY_VALUE,
        payload
    };
};

export const changeTargetCurrencyCountry = (payload) => {
    return {
        type: CHANGE_TGT_CURRENCY_COUNTRY,
        payload
    };
};

export const changeTargetCurrencyValue = (payload) => {
    return {
        type: CHANGE_TGT_CURRENCY_VALUE,
        payload
    };
};