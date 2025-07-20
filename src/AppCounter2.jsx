import React, { useState, useReducer} from 'react';
import reducer from '../reducer/counter-reducer';

export default function AppCounter2() {
    const [amount, setAmount] = useState(1);
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <input 
                type="number" 
                value={amount}
                onChange={(e)=> setAmount(Number(e.target.value))}
                style={{ width: '50px', marginRight: '8px' }}
            />
            <button onClick={()=>dispatch({type: 'increase', payload: amount})}>+ 증가</button>
        </div>
    );
}

