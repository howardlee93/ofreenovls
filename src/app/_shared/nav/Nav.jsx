import Login from '../login/Login';
// import LogOut from '../login/LogOut';
import Intro from '../Intro.jsx'
import styles from './Nav.module.css';

const Navigation = () =>{
  return(
    <ul className={styles.navigation} role="navigation">
      <li><a href='/'>Home</a></li>
      <li>About</li>
      <li>Works</li>      
      <li>Search</li>
      <li><Login/></li>
    </ul>
  )
}

export default Navigation;
