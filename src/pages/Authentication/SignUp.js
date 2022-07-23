import React, { useState } from 'react'
import { MdDashboardCustomize } from 'react-icons/md'

import swal from 'sweetalert';


const SignUp = () => {
  const [ email, setEmail ] = useState()
  const [ name, setName ] = useState()
  const [ password, setPassword ] = useState()

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', "application/json");
  myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');

  const raw = JSON.stringify({
    "name": name,
    "password": password,
    "email": email
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = (response) => {
    if (response.code === 200) {
      swal("Regisration Successful, proceed to login", {
        icon: "success",
      });
    } else {
      swal({
        title: "Registration failed",
        text: "Unable to register, please try again later",
        icon: "error"
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !password) return
    fetch("https://evento-apis.herokuapp.com/user/register", requestOptions)
    .then(response => response.text())
    .then(result => response(result))
  }

  return (
    <div className='overflow-x-hidden mt-24 w-screen h-screen bg-white'>
      <div className='flex flex-col justify-between items-center w-5/6 md:w-2/5 m-auto rounded-2xl bg-gray-200 py-10 drop-shadow-xl'>
        <div className='mb-20 flex justify-center items-center'>
          <div
            className="items-center gap-3 ml-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <MdDashboardCustomize /><span>Evento</span>
          </div><span className='text-4xl'> | </span><p className='text-2xl font-bold'>SIGNUP</p>
        </div>
        <div className='w-3/4'>
          <form>
            <div className='flex flex-col gap-4 items-center'>
              <input 
                placeholder="Enter your email"
                label="email"
                onChange={(e)=> setEmail(e.target.value)}
                className="rounded-2xl outline-none h-14 p-2 text-core font-medium w-5/6 md:w-full"
                required
              />
              <input 
                placeholder="Enter your full name"
                label="name"
                onChange={(e)=> setName(e.target.value)}
                className="rounded-2xl outline-none h-14 p-2 text-core font-medium w-5/6 md:w-full"
                required
              />
              <input 
                placeholder="*************"
                label="password"
                onChange={(e)=>setPassword(e.target.value)}
                className="rounded-2xl outline-none h-14 p-2 text-core font-medium w-5/6 md:w-full"
                required
              />
              <p className="text-sm font-medium text-left">Forgot password?</p>
            </div>
            <button
            onClick={handleSubmit}
            type="submit"
            className='mt-6 m-auto flex justify-center items-center bg-blue-400 hover:drop-shadow-xl hover:bg-blue-600 rounded-2xl outline-none h-14 p-2 text-lg font-bold w-5/6 md:w-3/4'
          >
            SignUp
          </button>
          </form>
        </div>
        <div className='mt-10'>
          <p className='font-medium text-sm md:text-core'>Already have an account? <a href='/login' className='text-blue-800'> Click here to login </a></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
