import { useContext } from 'react';
import { Grid } from "@material-ui/core"
import TransactionItem from "./TransactionItem"
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from '../context/actions/index';
const TransactionList = () => {
    const { state } = useContext(GlobalContext);
    return(
        <Grid container>
            <Grid item xs={12}>
                <h3>History</h3>
                <hr />
            </Grid>     
            <Grid item xs={12}>
                {state.transactions.map((transaction: Transaction) => (
                    <TransactionItem key={transaction.id} transaction ={transaction}/>
                ))}
            </Grid>
        </Grid>
    )
}

export default TransactionList;