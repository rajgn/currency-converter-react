import * as actions from './actions';
import * as types from './actionTypes';

describe('currencyUserAction', () => {
    it('should create an action to change Source Currency Country', () => {
        const payload = 'USD';
        const expectedAction = {
            type: types.CHANGE_SRC_CURRENCY_COUNTRY,
            payload
        };
        expect(actions.changeSourceCurrencyCountry(payload)).toEqual(expectedAction);
    });

    it('should create an action to change Source Currency Value', () => {
        const payload = '1111';
        const expectedAction = {
            type: types.CHANGE_SRC_CURRENCY_VALUE,
            payload
        };
        expect(actions.changeSourceCurrencyValue(payload)).toEqual(expectedAction);
    });

    it('should create an action to change Target Currency Country', () => {
        const payload = 'EUR';
        const expectedAction = {
            type: types.CHANGE_TGT_CURRENCY_COUNTRY,
            payload
        };
        expect(actions.changeTargetCurrencyCountry(payload)).toEqual(expectedAction);
    });

    it('should create an action to change Target Currency Value', () => {
        const payload = '1234';
        const expectedAction = {
            type: types.CHANGE_TGT_CURRENCY_VALUE,
            payload
        };
        expect(actions.changeTargetCurrencyValue(payload)).toEqual(expectedAction);
    });
});