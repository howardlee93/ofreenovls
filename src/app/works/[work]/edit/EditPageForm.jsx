'use client';
import {useState, useEffect} from 'react';
import Form from '../../form';

const EditPageForm = (props)=>{
    const {workInfo} = props;
    const [content, setContent] = useState('');
    const handleSubmit= e=>{
        e.preventDefault();
        const data ={
            id:workInfo.id,
            title: e.target.title.value,
            subject: e.target.subject.value,
            summary: e.target.summary.value,
        };
        const options ={
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
              // Body of the request is the JSON data we created above.
              body: JSON.stringify(data),
        }
        console.log(data)

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