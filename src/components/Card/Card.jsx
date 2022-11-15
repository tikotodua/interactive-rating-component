import React from 'react'
import Styles from './Card.module.css'
import Star from '../../components/Star/Star'
import Description from '../../components/Description/Description'
import SubmitButton from '../../components/SubmitButton/SubmitButton'

import {useState} from 'react'

export default function Card({triggerRatingUpdate}) {
    const clickAlert = () => {
        console.log('I am working');
      };

    const [state, setState] = useState({
        isActive: 0,
      });
    // console.log(state.isActive)
  return (
    <div className={Styles.cardBody}>
        <Star/>
        <Description name="How did we do?" description="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!" align="left"/>
      
            <div className='ratingWrap'>
              {[...Array(5).keys()].map((item) => {
                  return (
                    <span 
                      key={item} 
                      className={`rateItem ${item + 1 === state.isActive ? 'active' : ''}`} 
                      onClick={(event) => {
                        setState({
                          ...state,
                          isActive: item + 1, 
                        })
                      }}
                    > {item + 1}
                    </span>
                  )
                  })}
            </div>
            <SubmitButton 
                data="Submit" 
                clickHandler={() => triggerRatingUpdate(state.isActive)}
            />
    </div>
  )
}

