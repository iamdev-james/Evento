import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'

import { Link, useParams } from 'react-router-dom'

import { FaCalendar } from 'react-icons/fa'

import { events } from '../data/events';

// const { event, setEvent } = useState()

const Event = () => {
  const { eventId } = useParams();

  const event = events.find(event => {
    return Number(event.id) === Number(eventId)
  })
  return event? (
    <div className='m-6 gap-4'>
      <div className='text-left'>
        <img
          src={event?.eventImage || 'https://1dhtiq2hme231m0xvc3fd4es-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/2017-08-24-at-13-19-01-1.jpg'}
          alt={event.eventName}
          className="w-full h-64 rounded-t-2xl"
        />
        <p className='text-3xl font-bold text-gray-600 mt-2'>{ event.eventName }</p>
        <p className='flex gap-2 text-medium text-gray-400 py-4'><span><FaCalendar /></span>{ event.eventDate }</p>
      </div>
      <div className='flex flex-wrap gap-3 justify-center items-center'>
        <Link to={`/generate-link/` + event.id}>
          <button
            className="bg-blue-300 text-gray-800 rounded-2xl text-sm font-medium p-4 hover:drop-shadow-xl"
          >Generate Registration Link</button>
        </Link>
        <Link to={`/create-outline/` + event.id}>
          <button
            type='button'
            className="bg-blue-300 text-gray-800 rounded-2xl text-sm font-medium p-4 hover:drop-shadow-xl"
          >Create Programme Outline</button>
        </Link>
      </div>
      <div className='flex gap-8 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-400 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'> Activities </p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 hover:drop-shadow-xl text-gray-600'>
                <span><GoPrimitiveDot /></span>
                <span>Outline</span>
              </p>
              <p className='flex items-center gap-2 hover:drop-shadow-xl text-green-400'>
                <span><GoPrimitiveDot /></span>
                <span>Attendees</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Item not found</div>
  )
}

export default Event