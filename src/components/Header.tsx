import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { CloudOffOutlined } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles({
    headerItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    }, 
    cloudIconHide: {
        marginTop: 20,
        display: 'none'
    },
    cloudIconShow: {
        marginTop: 20,
    }
})
const Header = () => {
    const [online, setOnline] = useState(true);

    window.addEventListener('online', () => setOnline(true));
    window.addEventListener('offline', () => setOnline(false));

    const { headerItem, cloudIconHide, cloudIconShow } = useStyles();
    return (
        <Grid container spacing={0} justify="center">
            <Grid item className={headerItem} xs={12}>
            <h3>Expense Tracker</h3>
            <CloudOffOutlined className={online ? cloudIconHide : cloudIconShow} color="primary" />
            </Grid>
        </Grid>
    )
}

export default Header;