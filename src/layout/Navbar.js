import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'

// Context Here
import { useStateContext } from '../contexts/ContextProvider'

// Declaring a custom function for all our Nav buttons
const NavButton = ({title, customFunc, icon, color, dotColor}) => (
    <button
    type="button"
    onClick={customFunc}
    style= {{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
      style={{
        backgroundColor: dotColor
      }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      { icon }
    </button>
)

const NavBar = () => {
  const { setMenuActive, toggleNavModal, screenSize, setScreenSize, adminData } = useStateContext();

  useEffect(() => {
    const handleScreenSize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleScreenSize)

    handleScreenSize();

    return () => window.removeEventListener('resize', handleScreenSize)
  })
  
  // Setting nav based on user screen size
  useEffect(() => {
    if (screenSize <= 900) {
      setMenuActive(false)
    } else {
      setMenuActive(true)
    }
  }, [screenSize, setMenuActive])
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title="Menu"
        customFunc= {() => setMenuActive((prevMenuActive) => !prevMenuActive )}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => toggleNavModal('userProfile')}>
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt='Profile-Img' className='rounded-full w-12 h-10' />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>{ adminData.response?.user?.username || '' }</span>
            </p>
          <MdKeyboardArrowDown />
          </div>
      </div>
    </div>
  )
}

export default NavBar