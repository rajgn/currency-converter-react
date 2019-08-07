import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import thunk from 'redux-thunk';
import {createMount} from '@material-ui/core/test-utils';
import SourceCurrencyInput from './components/SourceCurrencyInput';
import TargetCurrencyInput from './components/TargetCurrencyInput';
import CurrencyConverterValue from './components/CurrencyConverterValue';

const middlewares = [ thunk ];

const mockStore = configureStore(middlewares);
const initialState = {
    currencyConverterReducer: {
        sourceCurrencyType: 'USD',
        sourceCurrencyValue: '',
        targetCurrencyType: 'EUR',
        targetCurrencyValue: '',
    },
    getConvertedRates: {
        data: [1.00]
    }};
const store = mockStore(initialState);
let wrapper;


describe('<App />', () => {
    let mount;

    beforeEach(() => {
        mount = createMount();
        wrapper = mount(<Provider store={store}><App/></Provider>);
    });

    it('should have class .App', () => {
        expect(wrapper.find('.App').length).toEqual(1)
    });

    it('renders header tag', () => {
        expect(wrapper.find('.App-header').length).toEqual(1)
    });

    it('renders Source Currency Component', () => {
        expect(wrapper.find(SourceCurrencyInput).length).toEqual(1)
    });

    it('renders Target Currency Component', () => {
        expect(wrapper.find(TargetCurrencyInput).length).toEqual(1)
    });

    it('renders CurrencyConverterValue Component', () => {
        expect(wrapper.find(CurrencyConverterValue).length).toEqual(1)
    });
});
