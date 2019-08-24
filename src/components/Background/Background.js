import React from 'react'
import bg from '../../img/bg.jpg'
import styles from './Background.module.css'

export default function Background(props) {
    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <img className={styles.img} src={bg} alt="backgroundimg"/>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}
