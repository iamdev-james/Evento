import React, { useState } from 'react'
// import { AiOutlineDelete } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { events } from '../../data/events';

const CreateOutline = () => {
  const { eventId } = useParams();

  const [inputFields, setInputFields] = useState([
    { startingTime: '', programme: '', endingTime: '' }
  ])

  const addFields = () => {
    let newField = { startingTime: '', programme: '', endingTime: '' }

    setInputFields([...inputFields, newField])
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields)
  }

  // Validate Id before proceeding
  const event = events.find(event => {
    return Number(event.id) === Number(eventId)
  })

  // const removeFields = (index) => {
  //   let data = [...inputFields];
  //   data.splice(index, 0)
  //   setInputFields(data)
  // }

  return event? (
    <div className="p-6 md:p-12 mt-12 md:mt-0">
      <div>
        <p className='text-3xl font-bold mt-2 mb-10'>Schedule your event</p>
        <p className='text-gray-500 font-medium'>Creating outline for { event.eventName }</p>
        <p className='mt-6 mb-3'>Event duration</p>
        <input 
          type="text"
          onChange=""
          className="rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4"
        />
        <div className='flex justify-between items-start font-medium text-gray-500 mt-6 mb-4'>
          <p>From..</p>
          <p>Programme</p>
          <p>To..</p>
        </div>
      </div>
      <form>
        {inputFields.map((input, index) => {
          return (
            <div
              key={index}
              className="mt-6 flex justify-center items-center gap-4"  
            >
              {/* <AiOutlineDelete onClick={removeFields(index)} /> */}
              <input
                type="time"
                name='startingTime'
                placeholder='From...'
                className='rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4'
              />
              <input
                type="text"
                name='programme'
                placeholder='Programme...'
                className='rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4'
              />
              <input
                type="time"
                name='endingTime'
                placeholder='To...'
                className='rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4'
              />
            </div>
          )
        })}
      </form>
      <button
        onClick={addFields}
        className='mt-8 m-auto flex justify-center items-center bg-blue-400 hover:drop-shadow-xl hover:bg-blue-600 hover:text-white rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4'
      >Add more</button>
      <button
        onClick={submit}
        className='mt-8 m-auto flex justify-center items-center border-2 border-solid border-blue-400 hover:drop-shadow-xl hover:bg-gray-200 hover:border-0 rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4'
      >Submit</button>
    </div>
  ) : (
    <div className="p-12">
      <p>Invalid Event ID, please confirm and try again </p>
    </div>
  )
}

export default CreateOutline