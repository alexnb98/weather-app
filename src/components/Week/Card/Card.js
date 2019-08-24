import React from 'react'
import {chooseIcon, kelvinToCelcius} from '../../../utils/utils'
import styles from './Card.module.css'
const moment = require('moment');

export default function Card({date, weather, temp, desc}) {
    const day = moment(date).format('D/M')
    const img = chooseIcon(weather)
    const celcius = kelvinToCelcius(temp)
    return (
        <div className={styles.card}>
            <div className={styles.date}>{day}</div>
            <img src={img} className={styles.img} alt={desc} title={desc} />
            <div>{celcius}°</div>
        </div>
    )
}
