import React, { useEffect, useState } from 'react'
import Question from './Question'

export default function Questions() {
    const [questionNumber, setQuestionNumber] = useState(1)
    const nextQuestion = () => {
        setQuestionNumber(questionNumber + 1)
    }
    return (
        <div className='h-full w-full relative'>
      <div className='absolute top-0 w-full h-1 bg-white transition-all'>
                <div className={`w-${questionNumber}/4 h-1 bg-[#0445af]`}>

                </div>
            </div>
            {questionNumber == 1 ? (
                <div className='flex h-full w-full'>
                    <Question
                        question={"Are you a victoria's secret fan?"}
                        description={null}
                        choices={
                            [
                                {
                                    text: "Yes",
                                    selected: false
                                },
                                {
                                    text: "No",
                                    selected: false
                                }
                            ]
                        }
                        questionNumber={1}
                        nextQuestion={nextQuestion}
                    />
                    <div className='h-full w-[50%] overflow-hidden'>
                        <img className='object-fit w-full' src="../../public/image1.avif" alt="" />
                    </div>
                </div>
            ) : (
                questionNumber == 2 ? (
                    <div className='flex h-full w-full'>
                        <Question
                            question={"Do you currently own any Victoria's Secret products?"}
                            description={null}
                            choices={
                                [
                                    {
                                        text: "Yes",
                                        selected: false
                                    },
                                    {
                                        text: "No",
                                        selected: false
                                    }
                                ]
                            }
                            questionNumber={2}
                            nextQuestion={nextQuestion}
                        />
                        <div className='h-full w-[50%] overflow-hidden'>
                        <img className='object-fit w-full' src="../../public/image2.avif" alt="" />
                    </div>
                    </div>
                ) : questionNumber == 3 ? (
                    <div className='flex h-full w-full'>
                        <Question
                            question={"Have you ever won in a survey?"}
                            description={null}
                            choices={
                                [
                                    {
                                        text: "Yes",
                                        selected: false
                                    },
                                    {
                                        text: "No",
                                        selected: false
                                    }
                                ]
                            }
                            questionNumber={3}
                            nextQuestion={nextQuestion}
                        />
                        <div className='h-full w-[50%] overflow-hidden'>
                        <img className='object-fit w-full' src="../../public/image3.avif" alt="" />
                    </div>
                    </div>
                ) : (
                    <div className='flex h-full w-full'>
                        <Question
                            question={"Ready to win a gift card to Victoria's Secret?"}
                            description={null}
                            choices={
                                [
                                    {
                                        text: "Yes",
                                        selected: false
                                    }
                                ]
                            }
                            questionNumber={4}
                            nextQuestion={nextQuestion}
                        />
                        <div className='h-full w-[50%] overflow-hidden'>
                        <img className='object-fit w-full' src="../../public/image4.avif" alt="" />
                    </div>
                    </div>
                )
            )}
        </div>
    )
}
