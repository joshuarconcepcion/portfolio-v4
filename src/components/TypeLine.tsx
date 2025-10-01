import { useState, useEffect, type JSX} from "react";

type TypeLineProps = {
    text: string,
    imgSrc: string,
    align?: 'left' | 'right',
    speed?: number,
    onDone?: () => void;
}

function TypeLine({
    text,
    imgSrc,
    align = 'left',
    speed = 10,
    onDone,
}: TypeLineProps): JSX.Element {
    const [display, setDisplay] = useState('');

    useEffect(() => {
        let i = 0;
        let canceled = false;
        setDisplay('');

        const tick = () => {
            if (canceled) return;
            if (i < text.length) {
                setDisplay((prev) => prev + text.charAt(i));
                i++;
                setTimeout(tick, speed);
            } else {
                onDone?.();
            }
        };
        tick();

        return () => {
            canceled = true;
        };
        
    }, [text, speed]);

    const isRight = align === 'right';
    
    return (
        <div className={`flex items-start gap-4 ${isRight ? 'justify-end' : ''}`}>
            {!isRight && (
                <img src = {imgSrc} className='aspect-square h-[50px]' />
            )}

            <h1 className='text-[clamp(1.125rem,3.2vw,1.25rem)] '>{display}</h1>

            {isRight && (
                <img src = {imgSrc} className='aspect-square h-[50px]' />
            )}
        </div>
    )
}

export default TypeLine