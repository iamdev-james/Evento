// Layouts to be used
import { Sidebar, Navbar } from './layout'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importing context
import { useStateContext } from './contexts/ContextProvider';

import './App.css';
import { CreateEvent, CreateOutline, Dashboard, Event, Events } from './pages';

function App() {
  const { menuActive } = useStateContext()

  return (
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
              <Route path="/" element={ <Dashboard />} />
              <Route path="/dashboard" element={ <Dashboard />} />

              {/* Pages */}
              <Route path="/events" element={ <Events />} />
              <Route path="/event/:eventId" element={ <Event />} />
              <Route path="/create-event" element={ <CreateEvent />} />
              <Route path="/create-outline/:eventId" element={ <CreateOutline />} />

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
  );
}

export default App;
