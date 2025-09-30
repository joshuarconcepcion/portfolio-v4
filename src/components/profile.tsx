import charImg from '../assets/charImg.png';

function Profile() {
    return (
        <div className='w-full flex flex-col items-center p-20 gap-4'>
            <h1 className='w-full text-center text-2xl font-default'>JOSHUA CONCEPCION</h1>
            <img src={charImg} className='block h-auto w-[clamp(300px,40vw,450px)] max-w-none shrink-0'></img>
        </div>
    )
}

export default Profile