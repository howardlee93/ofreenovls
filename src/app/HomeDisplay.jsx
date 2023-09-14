'use client';

import Link from 'next/link';
import { useAuth } from '@/app/_util/authContext';

const HomeDisplay = ({className})=>{
    const {user} = useAuth();

    return(
    <div className={className}>
        {user.name  && user.id?
            <>
            <h3>Hello {user.name}. You are  signed in. Welcome!</h3>
            <p><a href="/works/new">Post your work here</a></p>
            <p><a href={`/users/${user.id}`}>Go to dashboard</a></p>
            </>
            :<h3>Please sign in to view</h3>
        }

      </div>
    )
}


export default HomeDisplay;