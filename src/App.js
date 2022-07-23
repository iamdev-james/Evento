// Layouts to be used
import { Sidebar, Navbar } from './layout'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importing context
import { useStateContext } from './contexts/ContextProvider';

import './App.css';
import { CreateEvent, CreateOutline, Dashboard, Event, EventHomepage, Events, GenerateLink } from './pages';

import Login from './pages/Authentication/Login';
import Protected from './pages/Authentication/Protected';
import SignUp from './pages/Authentication/SignUp';

function App() {
  const { menuActive, isLoggedIn } = useStateContext()

  return isLoggedIn? (
    <div className="App">
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
        </div>
          {/* Menu section */}
          { menuActive? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ): (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div
          className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${menuActive? 'md:ml-72' : 'flex-2'}`
          }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          {/* Main Page */}
          <div>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path="/" element={ <Protected><Dashboard /></Protected>} />
              <Route path="/dashboard" element={ <Protected><Dashboard /></Protected> } />

              {/* Pages */}
              <Route path="/events" element={ <Protected><Events /></Protected>} />
              <Route path="/event/:eventId" element={ <Protected><Event /></Protected>} />
              <Route path="/create-event" element={ <Protected><CreateEvent /></Protected>} />
              <Route path="/create-outline/:eventId" element={ <Protected><CreateOutline /></Protected> } />
              <Route path="/generate-link/:eventId" element={ <Protected><GenerateLink /></Protected>} />
        {/* Users Route to register for events */}
              <Route path="/events/:eventId" element={ <EventHomepage />} />
              {/* Apps */}
              {/* <Route path="/kanban" element={ <Kanban />} />
              <Route path="/editor" element={ <Editor />} />
              <Route path="/calendar" element={ <Calendar />} />
              <Route path="/color-picker" element={ <ColorPicker />} /> */}
            </Routes>
          </div>
        </div>
        </div>
      </BrowserRouter>
    </div>
  ) : (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
