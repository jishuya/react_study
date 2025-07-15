import React, { useState } from 'react';

export default function AppCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className='counter'>
                <span className='number'>{count}</span>
                <button className='button' onClick={() => {
                    setCount(count + 1);
                }}>Add</button>
            </div>
        </div>
    );
}

