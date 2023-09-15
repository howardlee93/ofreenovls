'use client';

import { useAuth } from '@/app/_util/authContext';

const HomeDisplay = ({className})=>{
    const {user} = useAuth();

    return(
    <div className={className}>
        {user.name  && user.id?
            <>
            <h2>Hello {user.name}. You are  signed in. Welcome!</h2>
            <p><a href="/works/new">Post your work here</a></p>
            <p><a href={`/users/${user.id}`}>Go to dashboard</a></p>
            </>
            :<h2>Please sign in to view</h2>
        }

      </div>
    )
}


export default HomeDisplay;