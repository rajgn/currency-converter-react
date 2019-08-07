import React from 'react';
import CurrencyConverterValue from '../components/CurrencyConverterValue';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {createMount} from '@material-ui/core/test-utils';
import App from '../App.test';
import SourceCurrencyInput from './SourceCurrencyInput';
import TargetCurrencyInput from './TargetCurrencyInput';

const middlewares = [thunk];

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
    }
};
const store = mockStore(initialState);
let wrapper;

describe('<App />', () => {
    let mount;

    beforeEach(() => {
        mount = createMount();
        wrapper = mount(<Provider store={store}><CurrencyConverterValue srcCurrencyValue={1000}
                                                                        srcCurrencyType={'USD'}
                                                                        tgtCurrencyValue={880}
                                                                        tgtCurrencyType={'EUR'}
                                                                        currencyConversionRate={0.88}
        /></Provider>);
    });

    it('should have class converterValue and renders props', () => {
        expect(wrapper.find('.converterValue').length).toEqual(1);
        expect(wrapper.props().children.props.srcCurrencyValue).toEqual(1000);
        expect(wrapper.props().children.props.srcCurrencyType).toEqual('USD');
        expect(wrapper.props().children.props.tgtCurrencyValue).toEqual(880);
        expect(wrapper.props().children.props.tgtCurrencyType).toEqual('EUR');
        expect(wrapper.props().children.props.currencyConversionRate).toEqual(0.88);
    });
});
