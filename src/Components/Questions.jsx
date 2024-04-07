import React, { useState } from 'react'
import Question from './Question'

export default function Questions() {
    const [questionNumber, setQuestionNumber] = useState(1)
    const nextQuestion = () => {
        setQuestionNumber(nextQuestion + 1)
    }
    return (
        <div className='h-full w-full relative'>
            <div className='absolute top-0 w-full h-1 bg-white transition-all'>
                <div className={`w-${questionNumber}/4 h-1 bg-[#0445af]`}>

                </div>
            </div>

            {questionNumber == 1 ? (
                <div className='flex h-full '>
                    <Question
                        question={"Are you a victoria's secret fan?"}
                        description={null}
                        choices={
                            [
                                "Yes",
                                "No"
                            ]
                        }
                        questionNumber={questionNumber}
                        nextQuestion={nextQuestion}
                    />
                    <div className='h-full w-full border border-green-500'>

                    </div>
                </div>
            ) : (
                questionNumber == 2 ? (
                    <div></div>
                ) : questionNumber == 3 ? (
                    <div></div>
                ) : (
                    <div></div>
                )
            )}
        </div>
    )
}
