import React, { useEffect } from 'react';
import './App.css';
import { Container, Grid } from '@material-ui/core';
import Header from "./Header";
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransactions from './AddTransactions';
import { GlobalProvider } from '../context/GlobalState';
import firebase from './firebase';

function App() {
  function initMessages() {
    const messaging =  firebase.messaging();
    Notification.requestPermission().then(() => {
      return messaging.getToken()
    }).then((token) => {
      console.log('token', token);
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    initMessages();
  }, [])

  return (
    <GlobalProvider>
    <Container maxWidth="sm">
    <Grid item xs={12}><Header /></Grid>
      <Grid item xs={12}><Balance /></Grid>
      <Grid item xs={12}><IncomeExpenses /></Grid>
      <Grid item xs={12}><TransactionList /></Grid>
      <Grid item xs={12}><AddTransactions /></Grid>
    </Container>
    </GlobalProvider>
  );
}

export default App;

