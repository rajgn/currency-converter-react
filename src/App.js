import React, {Component} from 'react';
import {connect} from 'react-redux';
import SourceCurrencyInput from './components/SourceCurrencyInput';
import TargetCurrencyInput from './components/TargetCurrencyInput';
import {fetchCurrencyConverterRates} from './actions/currencyConverterActions';
import CurrencyConverterValue from './components/CurrencyConverterValue';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import './App.css';
import {
    changeSourceCurrencyValue,
    changeTargetCurrencyValue
} from './actions/actions';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class App extends Component {

    componentDidMount() {
        this.props.fetchCurrencyConverterRates(this.props.srcCurrencyType, this.props.tgtCurrencyType);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.srcCurrencyType !== this.props.srcCurrencyType ||
            prevProps.tgtCurrencyType !== this.props.tgtCurrencyType) {
            this.props.fetchCurrencyConverterRates(this.props.srcCurrencyType, this.props.tgtCurrencyType);
        }
    }

    clearAll = () => {
        this.props.sourceValue('');
        this.props.targetValue('');
    };

    render() {
        const {srcCurrencyType, tgtCurrencyType, srcCurrencyValue, tgtCurrencyValue, currencyConversionRate, classes} = this.props;

        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Currency Converter by Raja Rajan
                        </Typography>
                    </Toolbar>
                </AppBar>
                <header className="App-header">
                    <SourceCurrencyInput/>
                    <TargetCurrencyInput/>
                    <Button variant="contained" color="primary" className={classes.button}
                            onClick={() => this.clearAll()}>Clear</Button>
                </header>
                <CurrencyConverterValue srcCurrencyType={srcCurrencyType}
                                        tgtCurrencyType={tgtCurrencyType}
                                        srcCurrencyValue={srcCurrencyValue}
                                        tgtCurrencyValue={tgtCurrencyValue}
                                        currencyConversionRate={currencyConversionRate}
                />
                <footer><a href={'https://currencyconverterapi.com'} target={'_blank'}>API from currencyconverterapi.com</a></footer>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        srcCurrencyType: state.currencyConverterReducer.sourceCurrencyType,
        tgtCurrencyType: state.currencyConverterReducer.targetCurrencyType,
        srcCurrencyValue: state.currencyConverterReducer.sourceCurrencyValue,
        tgtCurrencyValue: state.currencyConverterReducer.targetCurrencyValue,
        currencyConversionRate: state.getConvertedRates.data[0]
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchCurrencyConverterRates: (src, tgt) => dispatch(fetchCurrencyConverterRates(src, tgt)),
    sourceValue: (val) => dispatch(changeSourceCurrencyValue(val)),
    targetValue: (val) => dispatch(changeTargetCurrencyValue(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
