import React from "react";
import data from "./data.json";
import styles from "./mystyle.module.css";

export default function BtGlass({ onChangeGlass }) {
  return data.map((glass) => {
    return (
      <div className={styles.glasses_element} onClick={() => onChangeGlass(glass.name)}>
        <img src={glass.displayUrl} alt="figure_picture"></img>
      </div>
    );
  });
}
