'use client';

import Link from 'next/link';
// import { useAuth } from '@/app/authContext';

//https://dev.to/seven/how-to-implement-protected-routes-in-nextjs-1m50
export default function Home() {

  // const {user} = useAuth();

  return (
  <>
  <div className="splash">
    <h1>home</h1>

    {/* {user.name ?
      <>
        <h3>You are already signed in. Welcome!</h3>
        <Link href="/post">Post your work here</Link>
      </>
      :<h3>Please sign in to view</h3>
    } */}
    <Link href="/user/register">Register new user</Link>
  </div>
  </>
  )
}
