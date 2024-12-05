import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prevState => !prevState);

  return (
    <div className="grid-container">
      <Header OpenSidebar={toggleSidebar} />
      <Sidebar openSidebarToggle={isSidebarOpen} OpenSidebar={toggleSidebar} />
      <Home />
    </div>
  );
};

export default App;
