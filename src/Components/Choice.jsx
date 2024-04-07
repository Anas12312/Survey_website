import React, { useRef } from 'react'

export default function Choice({ text, onSubmit }) {
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
        setTimeout(() => {
            onSubmit()
        }, 400)

    }
    return (
        <div onClick={refade} ref={ref} className='w-[50%] h-10 flex justify-center items-center bg-[#e5ecf7] fade-in-image border text-[#0445af] 
                                border-[#0445af] rounded-md 
                                my-3 cursor-pointer'>
            {text}
        </div>
    )
}
