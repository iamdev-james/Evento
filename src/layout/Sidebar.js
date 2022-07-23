import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineCancel, MdDashboardCustomize } from 'react-icons/md'

// Importing predefined links from dummy data
import { links } from '../data/Data';

// Importing Context
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
  const { menuActive, setMenuActive, screenSize } = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  // Closing side bar on mobile devices
  const handleCloseSidebar = () => {
    if (menuActive && screenSize <= 900 ) {
      setMenuActive(false)
    }
  }

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      { menuActive && (<>
        <div className='flex justify-between items-center'>
          <Link
          to="/"
          onClick={handleCloseSidebar}
          className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <MdDashboardCustomize /><span>Evento</span>
          </Link>
            <button
            type='button'
            onClick={() => setMenuActive((prevMenuActive) => !prevMenuActive) }
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <MdOutlineCancel />
            </button>
        </div>
        {/* Menu Items */}
        <div className='mt-10'>
          { links.map(item => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                { item.title }
              </p>
              {item.links.map(link => (
                <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick= {handleCloseSidebar}
                className={({ isActive }) => isActive? activeLink : normalLink }
                >
                  { link.icon }
                  <span className='capitalize'>{ link.name }</span>
                </NavLink>
              ))}
            </div>
          )) }
        </div>
        </>)}
    </div>
  )
}

export default Sidebar