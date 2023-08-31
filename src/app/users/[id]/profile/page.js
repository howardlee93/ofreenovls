import { PrismaClient } from "@prisma/client";
import ProfileEditButton from "./ProfileEditButton";

const Profile = async ({params})=>{

    const userId = parseInt(params.id);
    const prisma = new PrismaClient();
    const profile = await prisma.profile.findUnique({
        where:{
            userId
        }
    })
    const user = await prisma.user.findUnique({
        where:{
            id:userId
        }
    })
      
    //protect edit link use authcontext in client component
    return(
        <>
        <h1> Profile</h1>
        <p>user id: {userId}</p>
        <p>Name:{user.name}</p>
        <div dangerouslySetInnerHTML={{__html:profile.bio}}/>
        <ProfileEditButton userId={userId}/> 
        </>
    )
}

export default Profile;