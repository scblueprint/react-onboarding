import ComplexCard from "./components/ComplexCard";
import { useState } from "react";

const StateExample = () => {
    /**
     * useState is a hook that allows us to use state in functional components
     * It returns an array with two elements:
     * 1. The current state value
     * 2. A function that allows us to update the state (setter function)
     * If you want to update the state at any time you MUST use the setter function
     * React will automatically re-render the component with the new state
     * Doing count = [any value] will not update the state
     */
    const [count, setCount] = useState(0);

    return (
        <>
            <ComplexCard 
                title="State Example" 
                desc={`You've clicked ${count} times`}
                btnHandler={() => setCount(count + 1)} />
        </>
    );
}

export default StateExample;