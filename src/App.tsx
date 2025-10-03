import type { JSX } from 'react'
import Profile from './components/Profile'
import Chat from './components/Chat'
import Projects from './components/Projects'

function App(): JSX.Element {
  return (
      <div className='w-screen h-full lg:h-screen grid grid-cols-1 lg:grid-cols-[3fr_1fr]'>
        <div className='grid grid-cols-1 md:grid-cols-2 bg-off-white'>
          <Profile />
          <Chat />
        </div>

        <div className='flex flex-col w-full h-full bg-main-black'>
          <Projects />
        </div>
      </div>
  )
}

export default App
