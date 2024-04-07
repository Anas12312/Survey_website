import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function Form() {

    const [count, setCount] = useState(0);
    const ref = useRef(null);

    const refade = () => {

        ref.current.classList.toggle('fade-in-image');
        setTimeout(() => {
            ref.current.classList.toggle('fade-in-image');
        }, 100)

        setTimeout(() => {
            ref.current.classList.toggle('fade-in-image');
        }, 200)

        setTimeout(() => {
            ref.current.classList.toggle('fade-in-image');
        }, 300)

    }

    return (
        <div ref={ref} className='w-80 h-80 bg-slate-600 fade-in-image'>
            {count}
            <button onClick={(e) => { e.preventDefault(); setCount(count + 1); refade() }}>Add</button>
        </div>
    )
}
