import React from 'react'

function EditorFooter({ setStateText }) {
    return (
        <div>
            <div className='text-title'>Text</div>
            <textarea
                id="page_content"
                name="page[content]"
                rows="20"
                className='form-control form-color-main'
                onChange={(e) =>setStateText(e.target.value)}/>
        </div>
    )
}

export default EditorFooter
