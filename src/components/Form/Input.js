import React from "react";
import styles from "./Input.module.css";

export default function Input({change, name, value, label, autoFocus}) {
  return (
    <div className={styles.wrapper}>
      <label>
        <input
          autoComplete='none'
          value={value}
          name={name}
          onChange={change}
          autoFocus={autoFocus}
          className={styles.input}
          type='text'
        />
        <p className={styles.label}>{label}</p>
      </label>
    </div>
  );
}
