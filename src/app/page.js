'use client';

import Link from 'next/link';
import { useAuth } from '@/app/_util/authContext';

//https://dev.to/seven/how-to-implement-protected-routes-in-nextjs-1m50
export default function Home() {

  const {user} = useAuth();

  return (
  <>
  <div className="splash">
    <h1>home</h1>

    {user.name ?
      <>
        <h3>Hello {user.name} You are  signed in. Welcome!</h3>
        <a href="/post">Post your work here</a>
      </>
      :<h3>Please sign in to view</h3>
    }
    <Link href="/users/register">Register new user</Link>
  </div>
  </>
  )
}
