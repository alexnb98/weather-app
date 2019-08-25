import React from "react";
import styles from "./Week.module.css";
import Card from "./Card/Card";

export default function Week({list}) {
  const newList = list.slice(1);
  return (
    <div className={styles.week}>
      {newList.map((item, id) => {
        return (
          <Card
            date={item.dt_txt}
            weather={item.weather[0].id}
            desc={item.weather[0].description}
            temp={item.main.temp}
            key={id}
          ></Card>
        );
      })}
    </div>
  );
}
