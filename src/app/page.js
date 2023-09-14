import HomeSubjects from './HomeSubjects';
import HomeWorks from './HomeWorks';
import HomeDisplay from './HomeDisplay';
import styles from './home.module.css';

//https://dev.to/seven/how-to-implement-protected-routes-in-nextjs-1m50
export default function Home() {
  
  return (
    <div className={styles.container}>
        <h1  className={styles.main}>Home</h1>
        <div className={styles.works}>
        <HomeWorks />
        </div>
        
        <div className={styles.subjects}>
        <HomeSubjects />
        </div>
        <div className={styles.userdisplay}>
        <HomeDisplay />
        </div>

        <a className={styles.bottom} href="/users/register"><p>Register new user</p></a>
    </div>
    )
}
