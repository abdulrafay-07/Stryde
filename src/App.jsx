import React, { useEffect, useState } from 'react';
import { login, logout } from './store/authSlice';
import appwriteService from './appwrite/config';
import { useDispatch, useSelector } from 'react-redux';
import { Logo, Menu, Theme } from './components/index';
import { Outlet, Link } from 'react-router-dom';

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
      <div className='dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 font-primary duration-300'>
        {
          status ? (
            <div>
              <Menu />
              <Link to='/' className='fixed bottom-0 right-0 m-4'>
                <Logo />
              </Link>
            </div>
          ) : (
            <div className='fixed top-0 left-0 m-4'>
              <Logo />
            </div>
          )
        }
      </div>
      <div className='dark:bg-neutral-900 dark:text-white bg-white text-neutral-900 duration-300'>
        <Theme />
        <Outlet />
      </div>
    </div>
  ) : null
}

export default App;