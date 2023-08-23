import { PrismaClient } from "@prisma/client";


const Profile = ({params})=>{

    const userId = parseInt(params.user);
    const prisma = new PrismaClient();
    const profile =  prisma.profile.findUnique({
        where:{
            userId
        }
    })
      
    return(
        <>
        <h1> Profile</h1>
        <p>user id: {userId}</p>
        <p>Bio: {profile.bio}</p>
        <button>Edit</button>
        </>
    )
}

export default Profile;