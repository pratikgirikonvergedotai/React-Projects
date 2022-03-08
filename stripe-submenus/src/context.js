// setting up context so that we have our global values 
import React, { useState, useContext } from 'react';
import sublinks from './data';
// creating context
const AppContext = React.createContext();

// setting up app provide 
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
  const [location, setLocation] = useState({});
  // opening side bar 
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  // closing side bar 
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  // for opening sub menu
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  // for closing submenu 
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    // passing ur values in context provider 
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// exporting our custom hook called useGlobalContext . which return context which is setup above by using useContext hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
