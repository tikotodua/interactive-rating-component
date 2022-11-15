import React from 'react'
import Styles from './SubmitButton.module.css'

export default function SubmitButton ({ data, clickHandler }) {
  return (
    <div>
      <div onClick={clickHandler} className={Styles.buttonBody}>
        {data}
      </div>
    </div>
  );
};

