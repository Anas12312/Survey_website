import React from 'react'

export default function Question({
  question,
  description,
  choices,
  questionNumber,
  nextQuestion
}) {
  return (
    <div className='h-full w-[60%] border-4 border-red-500 flex items-center justify-center text-xl'>
      <div className='border-2 border-blue-400 w-[70%] flex flex-col'>
        <div>{questionNumber} &#10132; {question}</div>
        <div>{description}</div>
        <div>
          {choices.map((choice, index) => {
            
          })}
        </div>
      </div>
    </div>
  )
}
