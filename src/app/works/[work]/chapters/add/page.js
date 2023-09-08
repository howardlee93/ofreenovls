'use client';
import { useAuth } from "@/app/_util/authContext";
import {useState} from 'react';
import { useRouter } from 'next/navigation'
import ChapterForm from "../ChapterForm";

const AddNewChapterPage = ({params})=>{

    const {work} = params;
    const [content, setContent] = useState();
    const router = useRouter();

    const handleSubmit =e=>{
        e.preventDefault();
        const data = {
            workId: work,
            title :e.target.title.value || '',
            summary: e.target.summary.value || '',
            content: content.join('')
        }
        console.log(data);
        const options ={
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data)
        }
        fetch('/chapters/', options)
        .then(()=> router.replace(`/works/${work}`))
    }
    return(
        <>
            <h1> Add new chapter</h1>
            <ChapterForm
                handleSubmit={handleSubmit}
                content={content}
                setContent={setContent}
            />
        </>
    )
}

export default AddNewChapterPage;
