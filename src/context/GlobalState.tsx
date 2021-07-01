import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { ContextType, Transactions} from './actions/index';

//initialState
const initialState: Transactions = {
    transactions: []
}

// Create context
export const GlobalContext = createContext({} as ContextType);

// Provider component
export const GlobalProvider: React.FC = ({ children })  => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        state,dispatch
        }}>
        { children }
        </GlobalContext.Provider>)
}




