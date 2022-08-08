import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import {addAction, startAction, stopAction} from './store/actions'

import './style.css'

function App() {

  const disptch = useDispatch()
  const [timer, setTimer] = useState(null)
  //const randomeNumber = useSelector(({randomeNumber}) => randomeNumber)
  const {total, data, randomeNumber, max} = useSelector((state) => state)
  const start = () => {
    disptch(startAction())
    setTimer(setInterval(() => {
      disptch(addAction())
    }, 0))
  }
  const stop = () => {
    disptch(stopAction())
    clearInterval(timer)
  } 

  return (
    <div className="App">
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <p>Randome number: {randomeNumber}</p>
      <p>Counter: {total}</p>
      <p>Max: {max}</p>
      <div className='table'>
        <div className='row'>
          {data.map(el => (
            <div 
            className='col' 
            key={el.id}
            style={{'height': (el.val/(max/100)) + '%'}}
            >
              {el.val}
              <div className='number'>{el.id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
