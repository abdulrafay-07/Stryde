import React, { useEffect, useState } from 'react';
import { login, logout } from './store/authSlice';
import { toggleTheme } from './store/themeSlice';
import appwriteService from './appwrite/config';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Theme } from './components/index';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(true);

  const status = useSelector(state => state.auth.status);
  const theme = useSelector(state => state.theme.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    appwriteService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [status])

  return !loading? (
    <div className={`${theme}`}>
      <div className='dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 h-screen font-primary'>
        <Menu />
        <Theme />
        <Outlet />
      </div>
    </div>
  ) : null
}

export default App;