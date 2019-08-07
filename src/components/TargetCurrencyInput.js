import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {currencies} from '../constants';
import {changeTargetCurrencyCountry, changeTargetCurrencyValue} from '../actions/actions';
import {connect} from 'react-redux';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    currencyField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 100,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class TargetCurrencyInput extends PureComponent {

    handleChange = name => event => {
        this.props[name](event.target.value);
    };

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-select-currency"
                    select
                    className={classes.currencyField}
                    value={this.props.targetCurrencyType}
                    onChange={this.handleChange('targetCurrency')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your target currency"
                    margin="normal"
                    variant="outlined"
                >
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="standard-name"
                    label="Target Currency"
                    className={classes.textField}
                    value={this.props.targetCurrencyValue ? this.props.targetCurrencyValue : ''}
                    onChange={this.handleChange('targetValue')}
                    margin="normal"
                    type="number"
                />
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        targetCurrencyType: state.currencyConverterReducer.targetCurrencyType,
        targetCurrencyValue: state.currencyConverterReducer.targetCurrencyValue ? state.currencyConverterReducer.targetCurrencyValue : '',
    };
};

const mapDispatchToProps = dispatch => ({
    targetCurrency: (val) => dispatch(changeTargetCurrencyCountry(val)),
    targetValue: (val) => dispatch(changeTargetCurrencyValue(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TargetCurrencyInput));
