import Count from "../components/Count";
import Button from "../components/Button";

export default function Counter({ count, onIncrement, onDecrement}) {


    return (
        <>
            <div className="p-5 h-auto mb-5 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <Count count={count}/>
                <div className="flex space-x-3">
                    <Button handler={onIncrement}>Increment</Button>
                    <Button type="danger" handler={onDecrement}>Decrement</Button>
                </div>
            </div>
        </>
    );
} 