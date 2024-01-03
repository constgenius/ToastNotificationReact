import { AlertCircle, LogIn, UserCheck, Zap } from 'react-feather'
import './App.css'
import { useToast } from './components/Toast/ToastService'

function App() {
  const toast = useToast()

  const handleFail = () => {
    toast.open(
      <div className='flex gap-2 bg-red-300 text-red-800 p-4 rounded-lg shadow-lg'>
        <AlertCircle size={40} />
        <div>
          <h3 className='font-bold'>Action Failed</h3>
          <p className='text-sm'>This action failed miserably</p>
        </div>
      </div>
    )
  }

  const handleLogin = () => {
    toast.open(
      <div className='flex gap-2 bg-blue-300 text-blue-800 p-4 rounded-lg shadow-lg'>
        <UserCheck size={40} />
        <div>
          <h3 className='font-bold'>Authenticated</h3>
          <p className='text-sm'>You are logged in successfully</p>
        </div>
      </div>
    )
  }

  const handleActivate = () => {
    toast.open(
      <div className='flex gap-2 bg-green-300 text-green-800 p-4 rounded-lg shadow-lg'>
        <Zap size={40} />
        <div>
          <h3 className='font-bold'>Activated</h3>
          <p className='text-sm'>Item Activated successfully</p>
        </div>
      </div>,
      1000
    )
  }

  return (
    <>
      <div className='flex flex-col gap-4 items-center justify-center h-screen'>
        <button className='btn btn-danger' onClick={handleFail}><AlertCircle /> Fail</button>
        <button className='btn btn-info' onClick={handleLogin}><LogIn /> Login</button>
        <button className='btn btn-success' onClick={handleActivate}><Zap /> Activate</button>
      </div>
    </>
  )
}

export default App
