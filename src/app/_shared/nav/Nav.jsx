'use client';

import Login from '../login/Login';
import LogOut from '../login/LogOut';
import styles from './Nav.module.css';
import { useAuth } from '@/app/_util/authContext';

const Navigation = () =>{
  const {user} = useAuth();

  return(
    <>
    <ul className={styles.navigation} role="navigation">
      <li><a href='/'>Home</a></li>
      <li>About</li>
      <li>Works</li>      
      <li>Search</li>
      <li>
        {user.name ? 
        <a href={`users/${user.id}`}>Hello, {user.name}</a>
        :
        <Login/>
        }
      </li>
      <li><LogOut/></li>
    </ul>
    </>
  )
}

export default Navigation;
