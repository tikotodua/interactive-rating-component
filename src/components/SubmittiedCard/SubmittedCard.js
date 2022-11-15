import React from 'react'
import SubmittedIcon from '../../assets/images/illustration-thank-you.svg'
import Styles from './SubmittedCard.module.css'
import Description from '../../components/Description/Description'

export default function SubmittedCard(props) {
  return (
    <div className={Styles.SubmittedCardBody}>
        <img src={SubmittedIcon} alt='Thank you'/>
        <div className={Styles.messageBody}>{props.messageText}</div>
        <Description name="Thank you!" description="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch." align="left"/>
    </div>
  )
}
