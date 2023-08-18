// import Login from '../login/Login';
// import LogOut from '../login/LogOut';
import styles from './Nav.module.css';

const Navigation = () =>{
  return(
    <ul className={styles.navigation} role="navigation">
      <li>About</li>
      <li>Works</li>      
      <li>Search</li>
      <li>Profile</li>
    </ul>
  )
}

export default Navigation;
