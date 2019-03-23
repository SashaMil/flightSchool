import React from 'react';
import Aux from '../../hoc/Aux';

import styles from './Display.module.css';

const Display = ( props ) => (
    <div className={styles.display}>
        {props.currentCity.weather ? (
            <Aux>
                <p className={styles.windDirection}>Wind Direction: {props.currentCity.weather["Wind-Direction"]}</p>
                <p className={styles.windDirection}>Wind Gust: {props.currentCity.weather["Wind-Gust"]}</p>
                <p className={styles.windDirection}>Wind Speed: {props.currentCity.weather["Wind-Speed"]}</p>
                <p className={styles.windDirection}>Visibility: {props.currentCity.weather["Visibility"]}</p>
                <p className={styles.windDirection}>Temperature: {props.currentCity.weather["Temperature"]}</p>
                <p className={styles.timestamp}>Last Updated: {props.currentCity.Timestamp}</p>
            </Aux>
        ) :
            <h2 className={styles.error}>No Information</h2>
        }
    </div>
);

export default Display;
