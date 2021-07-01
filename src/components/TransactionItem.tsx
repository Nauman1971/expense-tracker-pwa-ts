import { Button, Grid, Paper } from "@material-ui/core"
import { useContext } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { GlobalContext } from '../context/GlobalState';
import { deleteTransaction } from '../context/actions/actions';

export type Transaction = {
    transaction: {
        id: number;
        text: string;
        amount: number
    }
}
const TransactionItem = ({transaction}: Transaction) => {
    const { dispatch } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-': '+';

    const handleDelete = (id: number) => {
        dispatch(
            deleteTransaction(id)
        )
    } 
    return (
        <Grid justify="flex-end" container spacing={2}>
            <Grid item xs={12}>
                <Paper className={transaction.amount<0 ? 'minus transaction-item': 'plus transaction-item'} style={{width: '100%'}} elevation={15}>
                            <div style={{marginLeft: '10px'}}>{transaction.text}</div>
                    <div>{sign}${Math.abs(transaction.amount)}</div>
                    <Button className="del-btn"
                    onClick={() => handleDelete(transaction.id)}
                    endIcon={
                    <DeleteForeverIcon color="secondary"/>}
                    ></Button>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default TransactionItem;