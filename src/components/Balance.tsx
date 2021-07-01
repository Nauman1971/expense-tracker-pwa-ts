import { Grid } from "@material-ui/core"
import { useContext } from 'react';
import { GlobalContext} from '../context/GlobalState';
import { Transaction } from '../context/actions/index';
const Balance = () => {
    const { state } = useContext(GlobalContext);
    const amount = state.transactions.map((transaction: Transaction) => transaction.amount);
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <Grid container>
        <Grid item xs={12}>
            <h4>Your balance</h4>
            <h3>${total}</h3>
            </Grid>
        </Grid>
    )
}

export default Balance;