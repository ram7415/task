import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SidebarItem from './components/SidebarItem';
import Profile from './components/Profile';

function App() {
  const [expanded, setExpanded] = useState(true);

  const handleItemClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex min-h-screen relative">
      <Sidebar expanded={expanded} setExpanded={setExpanded}>
        <SidebarItem
          icon={<i className="fas fa-th-large my-1 text-gray-500"></i>}
          text="Home"
          active
          onClick={handleItemClick}
        />
        <SidebarItem
          icon={<i className="fas fa-tachometer-alt text-lg my-1 text-gray-500 mr-1"></i>}
          text="Dashboard"
          alert
          onClick={handleItemClick}
        />
        <SidebarItem
          icon={<i className="fas fa-calendar-alt my-1 text-gray-500"></i>}
          text="Calendar"
          alert
          onClick={handleItemClick}
        />
        <SidebarItem
          icon={<i className="fa-solid my-1 fa-bell"></i>}
          text="Notifications"
          alert
          onClick={handleItemClick}
        />
        <SidebarItem
          icon={<i className="fas fa-dollar-sign my-1 text-xl"></i>}
          text="Finance"
          alert
          onClick={handleItemClick}
        />
        <SidebarItem
          icon={<i className="fas fa-laptop text-sm"></i>}
          text="Work"
          alert
          onClick={handleItemClick}
        />
        <SidebarItem
          icon={<i className="fas fa-cog"></i>}
          text="Settings"
          alert
          onClick={handleItemClick}
        />
      </Sidebar>
      <div className="flex-grow">
        {/* Your main content goes here */}
      </div>
      <div className="absolute top-0 right-0 m-4">
        <Profile />
      </div>
    </div>
  );
}

export default App;
