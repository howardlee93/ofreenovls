'use client';

import { useAuth } from '@/app/_util/authContext';
import Login from './_shared/login/Login';
import styles from './home.module.css'

const HomeDisplay = ({className})=>{
    const {user} = useAuth();

    return(
    <div className={className}>
        {user.name  && user.id?
            <>
            <h2 className={styles.homeSub}>Hello {user.name}. You are  signed in. Welcome!</h2>
            <p><a href="/works/new">Post your work here</a></p>
            <p><a href={`/users/${user.id}`}>Go to dashboard</a></p>
            </>
            :
            <>
            <h2 className={styles.homeSub}>Please sign in to view</h2>
            <Login/>
            </>
        }

      </div>
    )
}


export default HomeDisplay;