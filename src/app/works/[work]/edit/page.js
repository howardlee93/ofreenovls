'use client';
import {useState} from 'react';
import Form from '../../form';

const EditPage = ({params}) =>{
    const {work} = params;
    const [content, setContent] = useState('');
    const handleSubmit= e=>{
        e.preventDefault();

    }
    return (
        <>
        <h1>Edit {work.name}</h1>
        <Form content={content}
            setContent={setContent}
            handleSubmit={handleSubmit}
        />
        </>
    )
}

export default EditPage;