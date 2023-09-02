'use client';
import {useState, useEffect} from 'react';
import Form from '../../form';

const EditPageForm = (props)=>{
    const {workInfo} = props;
    const [content, setContent] = useState('');
    // const [workInfo, setWorkInfo] = useState(props.workInfo);
    const handleSubmit= e=>{
        e.preventDefault();
    };

    useEffect(()=>{
        // fetch(`/works?id=${work}` )
        // .then(response => response.json())
        // // .then(res => res.find((workElem)=> workElem.id === parseInt(work)))
        // .then(data => setWorkInfo(data[0]));
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
        />
        </>
        :""}
        </>
    )
}

export default EditPageForm;