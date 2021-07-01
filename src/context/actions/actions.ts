import { actionTypes, Actions, Transaction } from './index';

export const deleteTransaction = (id:number):Actions => {
    return {
            type: actionTypes.DELETE_TRANSACTION,
            payload: {
                id
            }
    }
}

export const addTransaction = (transaction: Transaction):Actions => {
    return {
        type: actionTypes.ADD_TRANSACTION,
        payload: transaction
    }
}