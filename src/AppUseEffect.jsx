import React, {useState, useEffect} from 'react';

export default function AppUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times.`;
    }, [count]);

    return (
    <div>
        <h1>UseEffect Test</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    </div>
    );
}

