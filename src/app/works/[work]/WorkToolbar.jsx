'use client';
import Link from "next/link";
import { useAuth } from "@/app/_util/authContext";

const WorkToolBar = ()=>{
    const {user} = useAuth();
    return(
        <ul>
        <button>Entire</button>
        <button>Next</button>
        <button>Bookmark</button>
        </ul>
    )
}

export default WorkToolBar;
