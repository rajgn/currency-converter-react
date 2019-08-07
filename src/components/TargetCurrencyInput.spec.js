import React from 'react';
import TargetCurrencyInput from '../components/TargetCurrencyInput';
import TextField from '@material-ui/core/TextField';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {createMount} from '@material-ui/core/test-utils';

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
        wrapper = mount(<Provider store={store}><TargetCurrencyInput targetCurrencyValue={1000}
                                                                     targetCurrencyType={'USD'}
        /></Provider>);
    });

    it('should have TextField component and renders props', () => {
        expect(wrapper.find(TextField).length).toEqual(2);
        expect(wrapper.props().children.props.targetCurrencyValue).toEqual(1000);
        expect(wrapper.props().children.props.targetCurrencyType).toEqual('USD');
    });
});
