'use client';
import Link from 'next/link';
import { useAuth } from '@/app/_util/authContext';

const ProfileEditButton = (props)=>{

    const {user} = useAuth();
    const {userId} = props;

    return(
        <>
        {user.id === userId ? 
        <Link href={`profile/edit`}>Edit</Link> 
            :
            ""
        }
        </>
    )
}

export default ProfileEditButton;

