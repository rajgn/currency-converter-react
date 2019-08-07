import React from 'react';
import SourceCurrencyInput from '../components/SourceCurrencyInput';
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
        wrapper = mount(<Provider store={store}><SourceCurrencyInput sourceCurrencyValue={1000}
                                                                     sourceCurrencyType={'USD'}
        /></Provider>);
    });

    it('should have TextField component and renders props', () => {
        expect(wrapper.find(TextField).length).toEqual(2);
        expect(wrapper.props().children.props.sourceCurrencyValue).toEqual(1000);
        expect(wrapper.props().children.props.sourceCurrencyType).toEqual('USD');
    });
});
