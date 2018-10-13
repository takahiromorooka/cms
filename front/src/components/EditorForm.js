import React from 'react'
import ElementButton from '../components/EditorElementButton'

function EditorFooter({content,  setStateText }) {
    return (
        <div>
            <div className='text-title'>Text</div>
            {/*<ElementButton/>*/}
            <textarea
                id="editor_content"
                rows="20"
                className='form-control form-color-main'
                value={content}
                onChange={(e) =>setStateText(e.target.value)}/>
        </div>
    )
}

export default EditorFooter
