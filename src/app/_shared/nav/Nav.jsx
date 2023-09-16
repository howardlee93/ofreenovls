'use client';

import Login from '../login/Login';
import LogOut from '../login/LogOut';
import styles from './Nav.module.css';
import { useAuth } from '@/app/_util/authContext';
import Link from 'next/link';
import Browse from '../browse/Browse';

const Navigation = () =>{
  const {user} = useAuth();

  return(
    <>
    <ul className={styles.navigation} role="navigation">
      <a className={styles.navLink} href='/'><li>Home</li></a>
      <li> <Browse/></li>
      <li>
        {user.name ? 
        <Link href={`/users/${user.id}`} replace className={styles.navLink}>Hello, {user.name}</Link>
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
