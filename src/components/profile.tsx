import type { JSX } from 'react';
import charGif from '../assets/charGif.gif';

type ProfileProps = {
    name?: string,
    imgSrc?: string,
}

function Profile({name='JOSHUA CONCEPCION', imgSrc=charGif}: ProfileProps): JSX.Element {
    return (
        <div className='w-full flex flex-col items-center p-20 gap-4'>
            <h1 className='w-full text-center text-2xl font-default'>{name}</h1>
            <img src={imgSrc} className='block h-auto w-[clamp(300px,40vw,400px)] max-w-none shrink-0'></img>
        </div>
    )
}

export default Profile