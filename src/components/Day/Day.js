import React from 'react'
import styles from './Day.module.css'
import {chooseIcon, kelvinToCelcius} from '../../utils/utils'

export default function Day({temp, desc, icon}) {
    const imgsrc = chooseIcon(icon)
    const celcius = kelvinToCelcius(temp)
    return (
        <div className={styles.day}>
            <img className={styles.img} src={imgsrc} alt={desc}></img>
            <div className={styles.temp}>{celcius}°</div>
            <div className={styles.desc}>{desc}</div>
        </div>
    )
}
