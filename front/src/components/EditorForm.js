import React from 'react'
import ElementButton from '../components/EditorElementButton'

function EditorForm({content,  setStateText }) {
    return (
        <div>
            <div className='text-title'>Text</div>
            <ElementButton
            setStateText={setStateText}/>
            <textarea
                id="editor-content"
                rows="20"
                className='form-control form-color-main'
                value={content}
                onChange={(e) =>setStateText(e.target.value)}/>
        </div>
    )
}

export default EditorForm
