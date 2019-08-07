import axios from 'axios';

const API_KEY = 'c25bd52d2041341c64a8';

export const getService = (srcCurrencyType, tgtCurrencyType, options) => {
    return (dispatch) => {
        const {requestAction, successAction, failureAction} = options.actions;

        if (options.shouldRequest) {
            let promise;
            dispatch(requestAction());
            promise = axios.get(`https://free.currencyconverterapi.com/api/v6/convert?q=${srcCurrencyType}_${tgtCurrencyType}&compact=ultra&apiKey=${API_KEY}`);
            return promise
                .then(response => {
                    if (response.status === 200) {
                        return dispatch(successAction(response, dispatch));
                    }
                    return Promise.reject(response);
                })
                .catch(error => {
                    console.log(error);
                    return dispatch(failureAction(error));
                });
        } else {
            return Promise.reject('FETCHING');
        }
    };
};