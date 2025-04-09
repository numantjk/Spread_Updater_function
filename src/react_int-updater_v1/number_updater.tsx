// Updater Function=a function passed as an argument to setstate()
//                          usually example setYear(arrow function )
//                          allow for safe update based on the previous state used with multiple state update
//                          and asynchronous function good practice to use u functions
import { useState } from "react";

function Number_updater() {
    const [updater, setUpdater] = useState<number>(0);



    //  Uses the CURRENT state to calculate the NEXT state.
    //  set functions do not trigger an update.
    //  React batches together state updates for performance reasons.دسته های واکنش با هم به دلایل عملکرد به روز رسانی می شوند
    // NEXT state becomes the CURRENT state after an update.


    const incrementHandler = () => {
        setUpdater(u=>u + 1);
        setUpdater(u=>u + 1);
        setUpdater(u=>u + 1);

    }

    const decrementHandler = () => {
        setUpdater(u=>u - 1);
        setUpdater(u=>u - 1);
        setUpdater(u=>u - 1);

    }

    const resetHandler = () => {
        setUpdater(0);
    }


    return (
        <div>
            <h1>Counter App</h1>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={resetHandler}>Reset</button>
            <button onClick={decrementHandler}>Decrement</button>
            <p>Current value: {updater}</p>
        </div>
    );
}

export default Number_updater;
