import { Grid, TextField, Button, makeStyles } from "@material-ui/core"
import { useContext } from 'react';
import { Transaction } from "../context/actions";
import { addTransaction } from "../context/actions/actions";
import { GlobalContext } from '../context/GlobalState';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const useStyles = makeStyles(({
    addTransactionContainer: {
        marginTop: '20px',
        marginBottom: '50px'
    }
}))
const AddTransactions = () => {
    const schema = yup.object({
        text: yup
        .string()
        .required("Text field is a required field"),
        amount: yup
        .number()
        .required("Amount field is a required field")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const { dispatch } = useContext(GlobalContext);

    const onClick = (data: any, event: any) => {
        event.preventDefault();
        console.log(data)
        const transaction: Transaction = {
            id: Math.floor(Math.random() * 1000000),
            text: data.text,
            amount: Number(data.amount)
        }
        dispatch(
            addTransaction(transaction)
        )
    }
    const { addTransactionContainer } = useStyles();
    return (
        <Grid container spacing={3} className={addTransactionContainer}>  
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField 
                    {...register('text')}
                    fullWidth
                    label="Text"
                    variant="outlined"
                    type="text" name= "text"
                    error={!!errors.text}
                    helperText={errors.text?.message}
                    margin="dense"
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField 
                    fullWidth
                    {...register('amount')}
                    error={!!errors.amount}
                    helperText={errors.amount?.message}
                    variant="outlined"
                    type="text"
                    label="Amount" name="amount"
                    margin="dense"
                />
            </Grid>
            <Grid item>
                <Button 
                    onClick={handleSubmit(onClick)}
                    color="secondary" variant="contained">Add Transaction</Button>
            </Grid>
        </Grid>
    )
}

export default AddTransactions;