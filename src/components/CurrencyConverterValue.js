import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {changeSourceCurrencyValue, changeTargetCurrencyValue} from '../actions/actions';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    }
};

class CurrencyConverterValue extends PureComponent {

    calculateTgtRate = () => {
        const {currencyConversionRate} = this.props;
        let convertedTargetRate = parseFloat((this.props.srcCurrencyValue ? this.props.srcCurrencyValue : '') * currencyConversionRate);
        this.props.changeTargetCurrencyValue(convertedTargetRate);
    };

    calculateSrcRate = () => {
        const {currencyConversionRate} = this.props;
        const convertedTargetRate = parseFloat((this.props.tgtCurrencyValue ? this.props.tgtCurrencyValue : '') / currencyConversionRate);
        this.props.changeSourceCurrencyValue(convertedTargetRate);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.srcCurrencyValue !== this.props.srcCurrencyValue) {
            this.calculateTgtRate();
        }
        if (prevProps.tgtCurrencyValue !== this.props.tgtCurrencyValue) {
            this.calculateSrcRate();
        }
        if (prevProps.srcCurrencyType !== this.props.srcCurrencyType || prevProps.tgtCurrencyType !== this.props.tgtCurrencyType) {
            this.props.changeSourceCurrencyValue('');
            this.props.changeTargetCurrencyValue('');
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={'converterValue'}>
                {this.props.srcCurrencyValue && this.props.tgtCurrencyValue ? <Card className={classes.card}>
                    <CardContent>
                        <code>
                            <Typography variant="h5" component="h2">
                                {this.props.srcCurrencyValue} {this.props.srcCurrencyType} equals {this.props.tgtCurrencyValue} {this.props.tgtCurrencyType}
                            </Typography>
                        </code>
                    </CardContent>
                </Card> : null}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    changeTargetCurrencyValue: (val) => dispatch(changeTargetCurrencyValue(val)),
    changeSourceCurrencyValue: (val) => dispatch(changeSourceCurrencyValue(val)),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(CurrencyConverterValue));
