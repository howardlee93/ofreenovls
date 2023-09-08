'use client';
import ChapterForm from "../../ChapterForm";
import {useState} from 'react';
import { useRouter } from 'next/navigation'

const EditChapterPageForm = (props)=>{
    const {chapter} = props;
    const [content, setContent] = useState(chapter.content);
    const router = useRouter();
    const handleSubmit = e=>{
        e.preventDefault();
        const data ={
            id: chapter.id,
            title: e.target.title.value,
            summary: e.target.summary.value,
            content: typeof(content) === 'string' ? content: content.join('')
        }
        console.log(data);
        const options ={
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        fetch('/chapters/', options)
        .then(()=> router.refresh())
        .then(()=> router.push(`/works/${chapter.workId}`))
    }
    return(
        <>
        <h1>Edit Chapter {chapter.title}</h1>
        <ChapterForm workInfo={chapter}
            content={content} setContent={setContent}
            handleSubmit={handleSubmit}
        />
        </>
    )
}

export default EditChapterPageForm;