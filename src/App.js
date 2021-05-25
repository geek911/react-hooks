import { useState, useEffect /* Runs in order as well */ } from 'react'



export default function App() {

    // count is immutable
    // setCount trigger the component ot rerender
    const [count, setCount] = useState(0)


    /**
     * This type of use effect runs only when the variable count changes, thus the first time componets
     * get mounted
     */
    useEffect(() => {
        console.log('count changed')
        // The return function is optional 
        return () => {
            // Respsonsible for cleaning up when the component unmounts
            // Runs only once when the component unmout
            console.log('cleaning after count')
        }
    }, [count]);

    /**
     * This type of use effect runs only once, thus the first time componets
     * get mounted
     */
    useEffect(() => {
        console.log('runs onlyonce')
        // The return function is optional 
        return () => {
            // Respsonsible for cleaning up when the component unmounts
            // Runs only once when the component unmout
            console.log('cleaning up everytime')
        }
    }, []);

    /**
     * This type of use effect renders everytime this component reloads
     * as well as when @setCount is triggered
     */
    useEffect(() => {
        console.log('runs everytime')
        // The return function is optional 
        return () => {
            // Respsonsible for cleaning up when the component unmounts
            // Runs everytime
            console.log('cleaning up everytime')
        }
    });





    return (
        /**
         * Always make sure that you inclose the JSX with the parathesis
         */
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}