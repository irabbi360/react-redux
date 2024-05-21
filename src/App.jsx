import Counter from './components/Counter'
import Stats from "./components/Stats.jsx";
import {useState} from "react";

const initialCounters = [
    {
        id: 1,
        value: 0,
    },
    {
        id: 2,
        value: 0,
    },
];

function App() {
const [counters, setCounters] = useState(initialCounters);

const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

const handleIncrement = (counterId) => {
    const updateCounters = counters.map(counter => {
        if (counter.id === counterId) {
            return {
                ...counter,
                value: counter.value + 1
            }
        }
        return counter;
    });
    setCounters(updateCounters);
}
const handleDecrement = (counterId) => {
    const updateCounters = counters.map(counter => {
        if (counter.id === counterId) {
            return {
                ...counter,
                value: counter.value - 1
            }
        }
        return counter;
    });
    setCounters(updateCounters);
}

  return (
    <>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>
          {counters.map((counter) => (
              <Counter
                  count={counter.value}
                  key={counter.id}
                  onIncrement={() => handleIncrement(counter.id)}
                  onDecrement={() => handleDecrement(counter.id)}
              />
          ))}


          <Stats count={totalCount} />
      </div>
    </>
  )
}

export default App
