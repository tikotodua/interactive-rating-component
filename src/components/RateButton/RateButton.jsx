import React from 'react'
import Styles from './RateButton.module.css'
import { useState } from 'react';


  // return (
  //   <div className={Styles.rateBody}>
  //       {props.map((number, index) => {
  //           return <input 
  //                     key={index} 
  //                     className={Styles.rateItem}
  //                     value={number}
  //                     type='button'
  //                     //onClick={(event) =>  console.log(event.target.value)}
  //                     onClick={props.clickHandler}

  //                   />
  //           })}
  //   </div>
   
  // )
  const Star = ({ marked, starId }) => {
    return (
      <span data-star-id={starId} className="star" role="button">
        {marked ? '\u2605' : '\u2606'}
      </span>
    );
  };

    export default function RateButton  ({ value })  {
    const [rating, setRating] = useState(parseInt(value) || 0);
    console.log('rating:', rating)
   
    const [selection, setSelection] = React.useState(0);
    console.log('selection:', selection)
  
    const hoverOver = event => {
      let val = 0;
      if (event && event.target && event.target.getAttribute('data-star-id'))
        val = event.target.getAttribute('data-star-id');
      setSelection(val);
    };
    return (
      <div
        onMouseOut={() => hoverOver(null)}
        onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
        onMouseOver={hoverOver}
      >
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            key={`star_${i + 1}`}
            marked={selection ? selection >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
    );
  };

