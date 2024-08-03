import React, { useEffect } from 'react';

const CountDown = () => {
  const [counter, setCounter] = React.useState(5)

  useEffect(() => {
    counter >= 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter < 0) return setCounter(5)
  }, [counter])

  return (
    <div className="App">
      <div>Refresh: {counter}s</div>
    </div>
  );
}

export default CountDown;