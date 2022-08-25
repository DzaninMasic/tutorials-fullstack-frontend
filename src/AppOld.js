import { useState } from "react";
import { decrement, increment, incrementByAmount } from './redux/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'


function App() {
  const [input, setInput] = useState('');
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  const increaseValue = () => {
    dispatch(increment())
  }

  const decreaseValue = () => {
    dispatch(decrement())
  }

  const onChangeValue = (event) => {
    if(!Number(event.target.value)) return;
    setInput(event.target.value)
  }

  const increaseValueByAmount = () => {
    dispatch(incrementByAmount(Number(input)))
  }

  return (
    <>
    <div>
      <div style={{
        display: 'flex'
      }}>
        <button onClick={decreaseValue}>
          -
        </button>
        <p style={{ maxHeight: '5px', margin: 0}}>
          {counter}
        </p>
        <button onClick={increaseValue}>
          +
        </button>
      </div>
    </div>
    <div>
      <input value={input} onChange={onChangeValue}></input>
      <button onClick={increaseValueByAmount}>Add amount</button>
    </div>
    </>
  );
}

export default App;
