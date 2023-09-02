'use client';
import {useState, useEffect} from 'react';
import Form from '../../form';

const EditPageForm = (props)=>{
    const {workInfo} = props;
    const [content, setContent] = useState('');
    const handleSubmit= e=>{
        e.preventDefault();
    };

    useEffect(()=>{
        console.log(workInfo);
    },[]);

    return (
        <>
        {workInfo ?
        <>
        <h1>Edit {workInfo.title}</h1>
        <Form content={workInfo.chapters[0].content}
            setContent={setContent}
            handleSubmit={handleSubmit}
            workInfo={workInfo}
        />
        </>
        :""}
        </>
    )
}

export default EditPageForm;