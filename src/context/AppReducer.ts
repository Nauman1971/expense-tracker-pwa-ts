import { actionTypes } from './actions/index';
import { Transactions, Actions, Transaction } from './actions/index';

const AppReducer = (state: Transactions, action: Actions): Transactions => {
    switch (action.type) {
        case actionTypes.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions
                    .filter((transaction: Transaction) => transaction.id !== action.payload.id)
            }
        case actionTypes.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state;
    }
}

export default AppReducer;