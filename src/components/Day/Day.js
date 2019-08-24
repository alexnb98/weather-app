import React from 'react'
import styles from './Day.module.css'

export default function Day({temp, desc, icon}) {
    return (
        <div className={styles.day}>
            <div className={styles.img}></div>
            <div className={styles.temp}>{temp}°</div>
            <div className={styles.desc}>{desc}</div>
        </div>
    )
}
