import React from 'react'
import Styles from './Description.module.css'


export default function Description(props) {
  return (
   <>
    <div className={Styles.title}>{props.name}</div>
    <div className={Styles.description} style={{...styles.container, textAlign: props.align}} >{props.description}</div>
   </>
  )
}

const styles = {
  container: {
    textAlign:'left'
  }
}
