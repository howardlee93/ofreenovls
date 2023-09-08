// 'use client';
// import {useState, useEffect} from 'react';
// import Form from '../../form';
import { PrismaClient } from "@prisma/client";
import EditPageForm from "./EditPageForm";

const EditPage = async ({params}) =>{
    const {work} = params;
    const prisma = new PrismaClient();
    const workInfo = await prisma.work.findUnique({
        where: {id: parseInt(work)},
        include:{
            chapters: {
                orderBy: {createdAt:'asc'}
            },
            subject: true,
            tag: true
        }
    })
    

    return (
        <>
        {workInfo ?
        <>
        <EditPageForm workInfo={workInfo}/>
        </>
        :""}
        </>
    )
}

export default EditPage;