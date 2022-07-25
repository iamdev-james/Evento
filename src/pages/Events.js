import React from 'react'
import { Link } from 'react-router-dom'

// import { useStateContext } from '../contexts/ContextProvider'

import { events } from '../data/events'

const Events = () => {
  // const { adminData } = useStateContext();

  return (
    <div className='flex m-6 mt-24 md:mt-auto flex-wrap justify-center gap-6 md:gap-4 items-center'>
      {
        events.map((event, index) => (
          <div
            key={index}
            className="cursor-pointer bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full md:w-56 p-0 pb-4 rounded-2xl"
          >
            <Link to={'/event/' + event.id }>
              <div className='w-full h-40 md:h-32 mb-6'>
                <img
                  src={event?.eventImage || 'https://1dhtiq2hme231m0xvc3fd4es-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/2017-08-24-at-13-19-01-1.jpg'}
                  alt={event.eventName}
                  className="w-full rounded-t-2xl h-full"
                />
              </div>
              <div className='text-left ml-2'>
                <p className='font-medium text-lg'>{ event.eventName }</p>
                <p className='mb-6 text-gray-400 text-sm font-medium'>{ event.eventDate }</p>
                <p className='font-medium'>{ event.eventLocation }</p>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Events