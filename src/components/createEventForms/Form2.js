import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div className='mt-24 md:mt-16'>
      <div>
        <p className='my-10 text-3xl font-bold'>
          Create an event
        </p>
        <form>
            {/* Description */}
            <div>
            <p className='text-core font-medium text-gray-600 text-left mt-8 mb-2 ml-8 md:ml-24'>Event Description</p>
            <input 
              placeholder="Event Description"
              label="Event Description"
              onChange={handleChange('eventdescription')}
              className="rounded-2xl outline-none h-32 p-2 text-lg font-medium w-5/6 md:w-3/4"
            />
            </div>
            {/* Event image */}
            <div>
              <p className='text-core font-medium text-gray-600 text-left mt-8 mb-2 ml-8 md:ml-24'>Banner Image</p>
              <input 
                type="file"
                onChange={handleChange('eventimage')}
                className="rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4"
              />
            </div>

            {/* Event color */}
            <div>
              <p className='text-core font-medium text-gray-600 text-left mt-8 mb-2 ml-8 md:ml-24'>Event Color</p>
              <input 
                type="color"
                label="Event color"
                onChange={handleChange('eventcolor')}
                className="rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4 my-5"
              />
            </div>

            {/* Event type */}
            <div>
              <p className='text-core font-medium text-gray-600 text-left mt-8 mb-2 ml-8 md:ml-24'>Event type</p>
              <input 
                placeholder="Event type i.e party, seminar"
                label="Event Type"
                onChange={handleChange('eventtype')}
                className="rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4"
              />
            </div>
            <div className='m-auto mt-10 flex justify-between items-center w-5/6 md:w-3/4'>
              <button 
                onClick={ Previous }
                type="submit"
                className='flex justify-center items-center bg-blue-400 hover:drop-shadow-xl hover:bg-blue-600 rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/12 md:w-2/5'
              >
                <FaArrowLeft className="mr-5" />
                Previous
              </button>
              <button 
                onClick={ Continue }
                type="submit"
                className='flex justify-center items-center bg-blue-400 hover:drop-shadow-xl hover:bg-blue-600 rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/12 md:w-2/5'
              >
                Next
                <FaArrowRight className="ml-5" />
              </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalDetails
