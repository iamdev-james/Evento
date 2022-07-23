import React from 'react'

import { FaArrowRight } from 'react-icons/fa'

const UserDetails = ({ nextStep, handleChange, values }) => {
  
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <div className='mt-32 md:mt-16'>
      <div>
        <p className='my-10 text-3xl font-bold'>
          Create Event
        </p>
        <form>
          <div>
              {/* event name */}
              <div>
              <p className='text-core font-medium text-gray-600 text-left mt-8 mb-2 ml-8 md:ml-24'>Event Name</p>
                <input 
                  placeholder="Event name..."
                  label="Event name..."
                  onChange={handleChange('eventname')}
                  className="rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4"
                />
              </div>
              <br />
              {/* Event date */}
              <div>
              <p className='text-core font-medium text-gray-600 text-left mt-8 mb-2 ml-8 md:ml-24'>Event Date</p>
              <input 
                  type="datetime-local"
                  onChange={handleChange('eventdate')}
                  className="rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4"
                />
              </div>
              <br />
              {/* Event Location */}
              <div>
              <p className='text-core font-medium text-gray-600 text-left mt-8 mb-2 ml-8 md:ml-24'>Event Location</p>
                <input 
                    placeholder="Event Location..."
                    label="Event location"
                    onChange={handleChange('eventlocation')}
                    className="rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4"
                  />
              </div>
          </div>
          <br />
          <button
            onClick={ Continue }
            type="submit"
            className='mt-4 m-auto flex justify-center items-center bg-blue-400 hover:drop-shadow-xl hover:bg-blue-600 rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4'
          >
            Next
            <FaArrowRight className="ml-5" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default UserDetails
