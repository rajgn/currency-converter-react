import {combineReducers} from 'redux';
import {currencyConverterReducer, getConvertedRates} from './currencyConverterReducer';

export default combineReducers({
    currencyConverterReducer,
    getConvertedRates
});