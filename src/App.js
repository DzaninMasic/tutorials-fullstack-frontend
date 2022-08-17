import { useState } from "react";

function App() {
  
  const [counter, setCounter] = useState(0);
  const [showError, setShowError] = useState(false);

  const increaseValue = () => {
    if(showError){
      setShowError(false);
    }
    setCounter(prevCounter => prevCounter + 1)
  }

  const decreaseValue = () => {
    if(counter === 0){ 
      setShowError(true)
      return;
    }
    setCounter(prevCounter => prevCounter - 1)
  }
  
  return (
    <div>
      <div style={{display: 'flex'}}>
        <button onClick={decreaseValue}>-</button>
        <p style={{maxHeight:'5px', margin: 0}}>{counter}</p>
        <button onClick={increaseValue}>+</button>
      </div>
      {showError && <div>
        <p>Error message.</p>
      </div>}
    </div>
  );
}

export default App;
