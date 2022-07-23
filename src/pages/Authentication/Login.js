import React from 'react'
import { MdDashboardCustomize } from 'react-icons/md'


const Login = () => {
  return (
    <div className='mt-24 w-screen h-screen bg-white'>
      <div className='flex flex-col justify-between items-center w-5/6 md:w-2/5 m-auto rounded-2xl bg-gray-200 py-10 drop-shadow-xl'>
        <div className='mb-20 flex justify-center items-center'>
          <div
            className="items-center gap-3 ml-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <MdDashboardCustomize /><span>Evento</span>
          </div><span className='text-4xl'> | </span><p className='text-2xl font-bold'>LOGIN</p>
        </div>
        <div className='w-3/4'>
          <form>
            <div className='flex flex-col gap-4 items-center'>
              <input 
                placeholder="Enter your email"
                label="email"
                onChange=""
                className="rounded-2xl outline-none h-14 p-2 text-core font-medium w-5/6 md:w-full"
                required
              />
              <input 
                placeholder="*************"
                label="password"
                onChange=""
                className="rounded-2xl outline-none h-14 p-2 text-core font-medium w-5/6 md:w-full"
                required
              />
            </div>
            <button
            onClick=""
            type="submit"
            className='mt-6 m-auto flex justify-center items-center bg-blue-400 hover:drop-shadow-xl hover:bg-blue-600 rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4'
          >
            Login
          </button>
          </form>
        </div>
        <div className='mt-10'>
          <p className='font-medium text-sm md:text-core'>New here? <a href='/signup' className='text-blue-800'> Click here to register </a></p>
        </div>
      </div>
    </div>
  )
}

export default Login