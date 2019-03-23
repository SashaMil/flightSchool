import React from 'react';
import styles from './Header.module.css';

const Header = ( props ) => (
    <div className={styles.header}>
        {props.cities.map((city, index) => {
            if (props.currentCity === index) {
                return (
                    <h1 className={styles.highlightedCity} key={props.currentCity.Station} >{city.City}</h1>
                )
            }
            else {
                return (
                    <h1 className={styles.city} key={props.currentCity.Station} >{city.City}</h1>
                );
            }
        })}
    </div>
);

export default Header;
