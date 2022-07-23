import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { useParams } from 'react-router-dom';
import { FaCopy } from 'react-icons/fa'

const GenerateLink = () => {
  const GenerateQRCode = (url) => {
    QRCode.toDataURL(url, {
        width: 800,
        margin: 2,
    }, (err, url) => {
        if (err) return console.error(err)
        console.log(url)
        setQr(url)
    })
  }
  const { eventId } = useParams()
  const [qr, setQr] = useState('')

  // URL
  const eventURL = `${window.location.origin}/events/${eventId}`

  useEffect(()=>{
    GenerateQRCode(`${window.location.origin}/events/${eventId}`)
  })
  return (
    <div className="mt-24 md:mt-0">
    <p className='my-8 text-3xl font-bold'>Event link</p>
    <div className='hover:drop-shadow-xl bg-white px-3 py-8 rounded-2xl w-3/4 md:w-1/3 m-auto'>
      {qr && <>
          <img src={qr} className="m-auto" alt="" height="500px" width="250px" />
          <p className='text-sm font-medium'>Download QR code and share or alternatively copy the url below</p>
          <div className='mt-5 flex p-3 justify-between items-center border-2 border-solid border-blue-400'>
            <p className='text-xs md:text-sm'>{`${window.location.origin}/events/${eventId}`}</p>
            <FaCopy
              className='cursor-pointer'
              onClick={navigator.clipboard.writeText(eventURL)} />
          </div>
          <button
            href={qr}
            download="qr.png"
            className='mt-4 m-auto flex justify-center items-center bg-blue-400 hover:drop-shadow-xl hover:bg-blue-600 rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4'
          >Download</button>
      </>}
    </div>
  </div>
  )
}

export default GenerateLink;