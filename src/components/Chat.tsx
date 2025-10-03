import { useState, useRef, type JSX, useEffect } from "react";
import TypeLine from "./TypeLine";
import iconP1 from '../assets/iconP1.png'
import iconP2 from '../assets/iconP2.png'

function Chat(): JSX.Element {
    const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);

    const intro = ` "Hey, I'm Joshua, a frontend developer ` +
    `from San Diego developing my skills and building projects ` +
    `in web development. What can I do for you?"`;

    const currentWork = ` "I’m currently building projects in frontend ` +
    `web development while deepening my skills in cybersecurity ` +
    `and digital forensics. It’s a mix of creative coding and ` +
    `technical problem solving.”`;

    const learnMore = ` "When I'm not coding, you can usually find me ` +
    `cafe hopping, exploring the city with my cats, ` +
    `or rewatching old cowboy movies. This space is a growing archive ` +
    `of the projects I’ve built and the ideas I’m exploring ` +
    `in development."`;

    const funFact = ` "Fun fact: I’ve traveled to Taiwan multiple times ` +
    `and plan to move there eventually! ` +
    `I’m learning Chinese to make the transition smoother.”`;

    const chatRef = useRef<HTMLDivElement | null>(null);
    const isFullscreen = step >= 2;

    useEffect(() => {
        if (isFullscreen) {
        requestAnimationFrame(() => {
            chatRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        }
    }, [isFullscreen]);

    return (
        <div
            ref={chatRef}
            className={[
                "flex flex-col w-full h-screen font-bold",
                "pt-4 gap-6 px-6",
                "md:pt-20 md:pr-16 md:pl-0 md:gap-12",
                isFullscreen ? "min-h-[100svh] md:min-h-0 overflow-auto" : "",
            ].join(" ")}
        >
            <TypeLine
                text = {intro}
                imgSrc = {iconP1}
                align = 'left'
                speed = {10}
                onDone = {() => setStep(1)}
            />

            {step >= 1 && (
                <div className='flex justify-end'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-4'>
                            <a className='text-center text-[clamp(1.125rem,3.2vw,1.25rem)] text-off-white bg-main-black p-1' 
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

            {step >= 2 && (
                <TypeLine
                text = {currentWork}
                imgSrc = {iconP1}
                align = 'left'
                speed = {10}
                onDone = {() => setStep(3)}
                />
            )}

            {step >= 3 && (
                <TypeLine
                text = {learnMore}
                imgSrc = {iconP1}
                align = 'left'
                speed = {10}
                onDone = {() => setStep(4)}
                />
            )}

            {step >= 4 && (
                <TypeLine
                text = {funFact}
                imgSrc = {iconP1}
                align = 'left'
                speed = {10}
                />
            )}
        </div>
    )
}

export default Chat