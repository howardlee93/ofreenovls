'use client';
import WorkToolBar from "./WorkToolbar";
import Link from "next/link";
import {useState} from 'react';

const WorkDisplayComponent = (props)=>{
    const {workText, work} = props;
    const [currChapter, setCurrChapter] = useState(0);
    const [showEntire, setShowEntire] = useState(false);
  
    const multiC = workText.chapters.length > 1;

    const warnings = {
        'none':'Decline to warn',
        'violence': 'Violence',
         'sex':'Sexual Content'
    };

    const ratings = {
        'pg':'PG',
        'pg13':'PG-13', 
        'm':'Mature', 
        'e':'Explicit'
    };
    const {chapters} = workText;
    return(
        <>
        <WorkToolBar multiC={multiC} params={work} 
            showEntire={showEntire} setShowEntire={setShowEntire}
            currChapter={currChapter} setCurrChapter={setCurrChapter}
            chapters={chapters}
        />
        <h1>{workText.title}</h1>
        <h2>{workText.summary}</h2>
        <p>by <Link href={`/users/${workText.authorId}`}>{workText.author.name}</Link></p>
        <p>Subjects:
        { workText.subject.map(sub=>
            <Link key={sub.id} href={`/subjects/${sub.id}`}>{sub.name}</Link>
        )} 
        </p>
        <p> Rated: {ratings[workText.rating]}</p>
        <p>Warning: {warnings[workText.warning]}</p>
        <p>Tags:
        { workText.tag.map(tag=>
            <Link key={tag.id} href={`/tags/${tag.id}`}>{tag.name}</Link>
        )}
        </p>
        
        {showEntire ?
        <>
        {workText.chapters.map((chapt, i) =>
        <div key={chapt.id}>
            <h1>Chapter {i+1}:{chapt.title} </h1>
            <div dangerouslySetInnerHTML={{__html: chapt.content}}/>
        </div>
        )}
        </>
        : 
        <>
        <h1>Chapter {parseInt(currChapter+1)}: {workText.chapters[currChapter].title}</h1>
            <div dangerouslySetInnerHTML={{__html: workText.chapters[currChapter].content}}/>
        </>
        }
        </>
    )
}

export default WorkDisplayComponent;