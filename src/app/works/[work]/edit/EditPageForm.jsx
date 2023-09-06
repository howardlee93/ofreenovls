'use client';
import {useState, useEffect} from 'react';
import Form from '../../form';
import { useRouter } from 'next/navigation'

const EditPageForm = (props)=>{
    const {workInfo} = props;
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit= e=>{
        e.preventDefault();
        const data ={
            id: workInfo.id,
            title: e.target.title.value,
            subject:  e.target.subject.value.indexOf(',') !== -1 ? e.target.subject.value.split(',') :
               [ e.target.subject.value],
            summary: e.target.summary.value,
            tags: e.target.tags.value.indexOf(',') !== -1 ? e.target.tags.value.split(',') :
                [e.target.tags.value],
            rating: e.target.rating.value,
            warning: e.target.warning.value,        
        };

        const options ={
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
              // Body of the request is the JSON data we created above.
              body: JSON.stringify(data),
        }
        console.log(data);
        fetch('/works/', options)
        .then(()=> router.refresh())
        .then(()=> router.push(`/works/${workInfo.id}`))

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