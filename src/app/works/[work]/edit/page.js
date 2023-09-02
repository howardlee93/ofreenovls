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
            chapters:true,
            subject: true
        }
    })
    // const [content, setContent] = useState('');
    // const [workInfo, setWorkInfo] = useState();
    // const handleSubmit= e=>{
    //     e.preventDefault();
    // };

    // useEffect(()=>{
    //     fetch(`/works?id=${work}` )
    //     .then(response => response.json())
    //     // .then(res => res.find((workElem)=> workElem.id === parseInt(work)))
    //     .then(data => setWorkInfo(data[0]));
    // },[]);

    return (
        <>
        {workInfo ?
        <>
        <EditPageForm workInfo={workInfo}/>
        {/* <h1>Edit {workInfo.title}</h1>
        <Form content={content}
            setContent={setContent}
            handleSubmit={handleSubmit}
        /> */}
        </>
        :""}
        </>
    )
}

export default EditPage;