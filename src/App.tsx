import Profile from './components/profile'

function App() {
  return (
      <div className='lg:grid lg:grid-cols-[3fr_1fr] lg:h-screen md:flex md:flex-col md:h-full w-screen'>
        <div className='flex bg-off-white'>
          <Profile />
          <div className='flex flex-col w-full'>

          </div>
        </div>

        <div className='flex flex-col w-full bg-main-black'>
        </div>
      </div>
  )
}

export default App
