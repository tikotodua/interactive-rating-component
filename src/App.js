import './App.css';
import Card from './components/Card/Card'
import {useState} from 'react'
import SubmittedCard from './components/SubmittiedCard/SubmittedCard'

function App() {
  
const [rating, setRating] = useState(0)
console.log("passed rating", rating)

const updateRating = (state) => {
  setRating(state)
} 


if(rating === 0) {
  return(
      <div className='App'>
          <Card rating = {rating} triggerRatingUpdate = {updateRating} />
      </div>
      
    
  )
}else {
  return(
    <div className='App'>
      <SubmittedCard messageText={`You selected ${rating} out of 5`}/>
    </div>
  )
}

}
export default App;
