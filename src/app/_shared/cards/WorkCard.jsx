import Link from 'next/link';
import {warnings, ratings} from '@/app/_shared/constants';


const WorkCard = (props)=>{
    const {work} = props;
    return(
        <>
        <h2><Link href={`/works/${work.id}`} >{work.title} </Link>by{" "}
        <Link href={`/users/${work.authorId}`}>{work.author.name}</Link>
        </h2>
        <p>Rating: {ratings[work.rating]}</p>
        <p>Warning: {warnings[work.warning]}</p>
        <p>Subjects: {work.subject.map(s=>
            <Link href={`/subjects/${s.id}`} key={s.id}>{s.name}</Link>
        )}</p>
        <p>Tags:{work.tag.map(t=>
            <Link href={`/tags/${t.id}`} key={t.id}>{t.name}</Link>
        )
        }</p>
        <p>Summary: {work.summary}</p>
    </>
    )
}

export default WorkCard;