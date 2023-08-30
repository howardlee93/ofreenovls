import Paragraph from '@editorjs/paragraph'; 
import Code from '@editorjs/code';




const DEFAULT_INITIAL_DATA =  {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "This is my awesome editor!",
          "level": 1
        }
      },
    ]
}

export const formatDataIntoBlocks = (data)=>{
    if (data.blocks){
        return data;
    }
    let output = {
        'time': new Date().getTime(),
        "blocks":[
            {
                'type':'paragraph',
                'data':{
                    'text':data,
                }
            }
        ]
    }
    return output;
}

// export const EDITOR_TOOLS = {
//     paragraph: Paragraph,
//     header: Header, 
// }

