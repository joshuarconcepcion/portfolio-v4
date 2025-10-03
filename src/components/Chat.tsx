import { useState, useRef, type JSX, useEffect } from "react";
import TypeLine from "./TypeLine";
import iconP1 from '../assets/iconP1.png'
import iconP2 from '../assets/iconP2.png'

function Chat(): JSX.Element {
    const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);

    const intro = ` "Hi, I’m Joshua, a frontend developer based in San Diego. ` +
    `I build clean, responsive websites and I’m always sharpening my skills through new projects. ` +
    `Got something in mind? Let’s make it happen!"`;

    const currentWork = ` "Right now, I'm focused on frontend development and learning the full stack. ` +
    `I'm building real-world projects, and currently working on a website for a client in the events space. ` +
    `For me, it's all about turning ideas into clean, functional web experiences. `;

    const learnMore = ` "When I’m not coding, I’m probably cafe  ` +
    `hopping, exploring the city with my cats, or rewatching old cowboy movies.` +
    `This site is my corner of the web. Part portfolio, part sandbox, this is where ` + 
    `I share the projects I’m building and the ideas I’m working through as I grow in web development.`;

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
                "md:pt-20 md:pr-16 md:pl-0 md:gap-8",
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