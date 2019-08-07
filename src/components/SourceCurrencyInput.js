import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {currencies} from '../constants';
import {changeSourceCurrencyCountry, changeSourceCurrencyValue} from '../actions/actions';

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

class SourceCurrencyInput extends PureComponent {

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
                    value={this.props.sourceCurrencyType}
                    onChange={this.handleChange('sourceCurrency')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your source currency"
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
                    label="Source Currency"
                    className={classes.textField}
                    value={this.props.sourceCurrencyValue ? this.props.sourceCurrencyValue : ''}
                    onChange={this.handleChange('sourceValue')}
                    margin="normal"
                    type="number"
                />
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        sourceCurrencyType: state.currencyConverterReducer.sourceCurrencyType,
        sourceCurrencyValue: state.currencyConverterReducer.sourceCurrencyValue,
    }
};

const mapDispatchToProps = dispatch => ({
    sourceCurrency: (val) => dispatch(changeSourceCurrencyCountry(val)),
    sourceValue: (val) => dispatch(changeSourceCurrencyValue(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SourceCurrencyInput));
