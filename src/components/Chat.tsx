import { useState, type JSX } from "react";
import TypeLine from "./TypeLine";
import iconP1 from '../assets/iconP1.png'
import iconP2 from '../assets/iconP1.png'

function Chat(): JSX.Element {
    const [step, setStep] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);

    const intro = ` "Hey, I'm Joshua, a computer science graduate ` +
    `from San Diego developing my skills and building projects ` +
    `in web development. What can I do for you?"`;

    const learnMore = `"When I'm not coding, you can usually find me ` +
    `cafe hopping, exploring the city with my cat, ` +
    `or rewatching old cowboy movies. This space is a growing archive ` +
    `of the projects I’ve built and the ideas I’m exploring ` +
    `in development."`;

    const currentWork = `"I’m currently building projects in frontend ` +
    `web development while deepening my skills in cybersecurity ` +
    `and digital forensics. It’s a mix of creative coding and ` +
    `technical problem solving.”`;

    const funFact = `"Fun fact: I’ve traveled to Taiwan multiple times ` +
    `and plan to move there eventually! ` +
    `I’m learning Chinese to make the transition smoother.”`;


    return (
        <div className='flex flex-col w-full pt-20 pr-6 pl-6 gap-12 font-bold'>
            <TypeLine
                text = {intro}
                imgSrc = {iconP1}
                align = 'left'
                speed = {10}
                onDone = {() => setStep(1)}
            />

            {step === 1 && (
                <div className='flex justify-end'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-4'>
                            <a className='text-[clamp(1.125rem,3.2vw,1.25rem)] text-off-white bg-main-black p-1' 
                                href='https://www.linkedin.com/in/joshuareyesconcepcion/'
                                target='_blank'>"LinkedIn"</a>
                            <a className='text-center text-[clamp(1.125rem,3.2vw,1.25rem)] text-off-white bg-main-black p-1' 
                                href='https://github.com/joshuarconcepcion'
                                target='_blank'>"GitHub"</a>
                            <button className='text-center text-[clamp(1.125rem,3.2vw,1.25rem)] text-off-white bg-main-black p-1' 
                                onClick={() => setStep(2)}>"Tell me about yourself"</button>
                        </div>
                        <div>
                            <img src={iconP2} className='w-[50px] aspect-square'></img>
                        </div>
                    </div>
                </div>
            )}

            {step === 2 && (
                <TypeLine
                text = {learnMore}
                imgSrc = {iconP1}
                align = 'left'
                speed = {10}
                onDone = {() => setStep(3)}
                />
            )}
        </div>
    )
}

export default Chat