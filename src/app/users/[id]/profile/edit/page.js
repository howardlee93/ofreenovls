import { PrismaClient } from '@prisma/client';
import EditProfileForm from './EditProfileForm';

const EditProfile = async({params})=>{

    const {id} = params; //user
    const prisma = new PrismaClient();
    const profile = await prisma.profile.findUnique({
        where:{
            userId: parseInt(id)
        }
    })
    return(
        <>
        {profile ? 
        <EditProfileForm profile={profile}/>
        :""} 
        </>
    )
}

export default EditProfile;