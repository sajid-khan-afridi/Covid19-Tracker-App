import React from 'react';
import { Card,CardContent,Typography,Grid } from '@material-ui/core';

import styles from './Cards.module.css';

import Countup from 'react-countup';

import cx from 'classnames';



const Cards = ({data:{confirmed,deaths,recovered,lastUpdate}}) => {
    if(!confirmed){
        return(
        <h1>Loading...</h1>
        )}
        //console.log(data);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                
                <Grid item component={Card} xs={12} md={3} className={cx(styles.cards,styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant='h5'>
                        <Countup 
                        start={0}
                        end={confirmed.value}
                        separator=","
                        duration={2.5}
                        />      
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.cards,styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant='h5'>
                        <Countup 
                        start={0}
                        end={recovered.value}
                        separator=","
                        duration={2.5}
                        />
                        
                        </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries cases of COVID-19</Typography>
                </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.cards,styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant='h5'>
                        <Countup 
                        start={0}
                        end={deaths.value}
                        separator=","
                        duration={2.5}
                        />
                        </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default  Cards;