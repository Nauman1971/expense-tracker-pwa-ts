export enum actionTypes {
    DELETE_TRANSACTION = 'DELETE_TRANSACTIONS',
    ADD_TRANSACTION = 'ADD_TRANSACTION'
}

export interface DeleteTransaction {
    type: actionTypes.DELETE_TRANSACTION;
    payload: {
        id: number
    }
}

export interface AddTransaction {
    type: actionTypes.ADD_TRANSACTION,
    payload: {
            id: number,
            text: string,
            amount: number
        }
}

export interface Transaction {
        id: number;
        text: string;
        amount: number
}

export interface Transactions {
    transactions: Transaction[]
}

export interface ContextType {
    state: Transactions;
    dispatch: React.Dispatch<Actions>
}


export type Actions = 
| AddTransaction | DeleteTransaction
