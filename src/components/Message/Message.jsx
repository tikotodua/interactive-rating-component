import React from 'react'
import Styles from './Message.module.css'


export default function Message(props) {
  return (
   <>
    <div className={Styles.messageBody}>{props.messageText}</div>
   </>
  )
}


