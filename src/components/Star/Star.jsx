import React from 'react'
import StarIcon from '../../assets/icons/icon-star.svg'
import Styles from './Star.module.css'

export default function Star() {
  return (
    <div className={Styles.starBody}>
      <img className={Styles.starIcon} src={StarIcon} alt='star'/>
    </div>
  )
}
