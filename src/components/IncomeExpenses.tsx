import { useContext } from 'react';
import { Grid, makeStyles, Paper } from "@material-ui/core"
import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles(theme => ({
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17
    }
}))
const IncomeExpenses = () => {
    const { cardContainer } = useStyles();
    const { state } = useContext(GlobalContext);
    const amounts = state.transactions.map(transaction => transaction.amount);
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <Paper className={cardContainer} elevation={15} style={{width: '100%'}}>
                    <h2>Income</h2>
                    <h2 className="income">{income}</h2>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={cardContainer} elevation={15} style={{width: '100%'}}>
                    <h2>Expense</h2>
                    <h2 className="expense">{expense}</h2>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default IncomeExpenses;