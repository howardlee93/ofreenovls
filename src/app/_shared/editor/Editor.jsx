'use client';


//https://github.com/sumankalia/react-editorjs/blob/main/src/components/EditorCompoenent.js
import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";

const Editor = (props)=>{
    const ref = useRef();

    useEffect(()=>{
        if (!ref.current){
            const editor = new EditorJS({
                data: props.data,
                holderId : 'editorjs',
                onChange: async () => {
                    let content = await editor.saver.save();
        
                    console.log(content);
                  },
            })
            ref.current = editor;
        }
        return()=>{
            if (ref.current && ref.current.destroy){
                ref.current.destroy();
            }
        }
    },[])

    return(
        <>
        <div id='editorjs'/>
        </>

    )
}

export default Editor;
