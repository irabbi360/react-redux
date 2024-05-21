import { useState } from "react";
import Count from "../components/Count";
import Button from "../components/Button";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className="p-5 h-auto mb-5 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={count}/>
            <div className="flex space-x-3">
                <Button handler={handleIncrement}>Increment</Button>
                <Button type="danger" handler={handleDecrement}>Decrement</Button>
            </div>
        </div>
    );
} 