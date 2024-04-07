import React, { useEffect, useRef } from 'react'
import Choice from './Choice'

export default function Question({
  question,
  description,
  choices,
  questionNumber,
  nextQuestion
}) {

  return (
    <div className='h-full w-[60%] flex items-center justify-center text-xl'>
      <div className='w-[80%] flex flex-col'>
        <div className='my-8 text-3xl'><span className='text-lg'>{questionNumber} &#10132;</span> {question}</div>
        <div>{description}</div>
        <div className='flex'>
          <div className='w-[6%]'></div>
          <div className='w-full'>
            {choices.map((choice, index) => {
              return <Choice text={choice.text} key={index} onSubmit={nextQuestion} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
