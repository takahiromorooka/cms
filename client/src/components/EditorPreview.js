import React from 'react'
import remark from "remark";
import reactRenderer from "remark-react";

function EditorFooter({ title, content }) {
    return (
        <div className='editor-preview'>
            <div key='preview-title'>
                {remark().use(reactRenderer).processSync(title).contents}
            </div>
            <div key='preview-content'>
                {remark().use(reactRenderer).processSync(content).contents}
            </div>
        </div>
    )
}

export default EditorFooter
