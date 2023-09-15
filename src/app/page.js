import HomeSubjects from './HomeSubjects';
import HomeWorks from './HomeWorks';
import HomeDisplay from './HomeDisplay';
import styles from './home.module.css';

//https://dev.to/seven/how-to-implement-protected-routes-in-nextjs-1m50
export default function Home() {
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.homeTitle}>Welcome to Ofreenovls</h1>
        <p>Ofreenovls is a website for posting and sharing chaptered texts, built with NextJs.</p>
      </div>
        <HomeWorks className={styles.works} /> 
        <HomeSubjects className={styles.subjects}/>
        <HomeDisplay className={styles.userdisplay}/>

        <a className={styles.bottom} href="/users/register"><p>Register new user</p></a>
    </div>
    )
}
