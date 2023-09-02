'use client';
import {useState, useEffect} from 'react';
import Form from '../../form';

const EditPage = ({params}) =>{
    const {work} = params;
    const [content, setContent] = useState('');
    const [workInfo, setWorkInfo] = useState();
    const handleSubmit= e=>{
        e.preventDefault();
    };


    useEffect(()=>{
        fetch('/works')
        .then(response => response.json())
        .then(res => res.find((workElem)=> workElem.id === parseInt(work)))
        .then(data => setWorkInfo(data));
    },[]);

    return (
        <>
        {workInfo ?
        <>
        <h1>Edit {workInfo.title}</h1>
        <Form content={content}
            setContent={setContent}
            handleSubmit={handleSubmit}
        />
        </>
        :""}
        </>
    )
}

export default EditPage;