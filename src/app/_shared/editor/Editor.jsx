'use client';
//https://github.com/Mediumtutorial/wysiwyg-editor-js-react/blob/main/src/tools.js
//https://github.com/sumankalia/react-editorjs/blob/main/src/components/EditorCompoenent.js
import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Paragrah from '@editorjs/paragraph'; 
import {formatDataIntoBlocks, formatBlocksToHTML} from './EditorHelper';

const Editor = ({content, setContent})=>{
    const ref = useRef();
    // const {content, setContent} = props;

    useEffect(()=>{
        // let formated; 
        // if (content.block){ // if already formated
        //     formated = content
        // }else{
        const formated = formatDataIntoBlocks(content);//
        // }
        console.log(formated, content);
        
        if (!ref.current){
            const editor = new EditorJS({
                tools:{
                    paragraph: Paragrah
                },
                data: formated,
                holderId : 'editorjs',
                onChange: async () => {
                    let newcontent = await editor.saver.save();
                    const contentToHTML = await formatBlocksToHTML(newcontent);
                    console.log(contentToHTML);
                    setContent(contentToHTML)
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

export default memo(Editor);
