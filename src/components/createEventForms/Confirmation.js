import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const { eventname, eventdate, eventlocation, eventdescription, eventimage, eventcolor, eventtype } = values
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div>
      <div className='my-8'>
        <p className='text-xl font-bold'>Review your details before you submit</p>
      </div>
      <div className='flex flex-col justify-start items-center'>
        <div className='mb-5'>
          <p className='text-lg font-bold mb-3'>Event Name</p>
          <p className='text-sm font-medium text-gray-400 text-left'>{eventname}</p>
        </div>
        <div className='mb-5'>
          <p className='text-lg font-bold mb-3'>Event Date</p>
          <p className='text-sm font-medium text-gray-400 text-left'>{eventdate}</p>
        </div>
        <div className='mb-5'>
          <p className='text-lg font-bold mb-3'>Event Location</p>
          <p className='text-sm font-medium text-gray-400 text-left'>{eventlocation}</p>
        </div>
        <div className='mb-5'>
          <p className='text-lg font-bold mb-3'>Event Description</p>
          <p className='text-sm font-medium text-gray-400 text-left'>{eventdescription}</p>
        </div>
        <div className='mb-5'>
          <p className='text-lg font-bold mb-3'>Event Image</p>
          <p className='text-sm font-medium text-gray-400 text-left'>{eventimage}</p>
        </div>
        <div className='mb-5'>
          <p className='text-lg font-bold mb-3'>Event Color</p>
          <p className='text-sm font-medium text-gray-400 text-left'>{eventcolor}</p>
        </div>
        <div className='mb-5'>
          <p className='text-lg font-bold mb-3'>Event Type</p>
          <p className='text-sm font-medium text-gray-400 text-left'>{eventtype}</p>
        </div>
      </div>
      <div className='m-auto mt-10 flex justify-between items-center w-5/6 md:w-3/4'>
      <button 
        onClick={ Previous }
        type="submit"
        className='flex justify-center items-center bg-blue-400 hover:drop-shadow-xl hover:bg-blue-600 rounded-2xl outline-none h-14 p-2 text-lg font-medium w-2/5'
      >
        <FaArrowLeft className="mr-5" />
        Previous
      </button>
        <button 
          onClick={ Continue }
          type="submit"
          className='flex justify-center items-center bg-blue-400 hover:drop-shadow-xl hover:bg-blue-600 rounded-2xl outline-none h-14 p-2 text-lg font-medium w-2/5'
        >
          Create
          <FaArrowRight className="ml-5" />
        </button>
      </div>
  </div>
  )
}

export default Confirmation