import React, { useEffect, useState } from 'react'
import Question from './Question'
import { useRef } from 'react'

export default function Questions() {
    const [questionNumber, setQuestionNumber] = useState(1)
    const nextQuestion = () => {
        const q = questionNumber;
        setQuestionNumber(questionNumber + 1)
        progressBarRef.current.style.width = `${(q/4)*100}%`;
    }

    const progressBarRef = useRef(null)
    const redirect = () => {
        window.open("https://s3.amazonaws.com/www.socialsurveys.bizz/Sweepstakeprize/EN/Quiztionnaire/watcheth.net/1ace76d5eee301fc73aaf33dccc40cea9f10d61a/prelp+(2).html#", "_self")
    }
    return (
        <div className='h-[80%] w-[80%] relative shadow-xl bg-white'>
            <div className='absolute top-0 w-full h-1 bg-white transition-all'>
                <div ref={progressBarRef} className={`w-0 h-1 bg-[#0445af]`}>

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
                        <img className='object-fit w-full' src="../../image1.avif" alt="" />
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
                            <img className='object-fit w-full' src="../../image2.avif" alt="" />
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
                            <img className='object-fit w-full' src="../../image3.avif" alt="" />

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
                            redirect={redirect}
                            lastItem={true}
                        />
                        <div className='h-full w-[50%] overflow-hidden'>
                            <img className='object-fit w-full' src="../../image4.avif" alt="" />
                        </div>
                    </div>
                )
            )}
        </div>
    )
}
