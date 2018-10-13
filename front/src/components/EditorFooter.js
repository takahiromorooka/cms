import React from 'react'

function EditorFooter({description, setStateDescription }) {
    return (
        <div className='editor-footer'>
            <div className='text-title'>Description</div>
            <input
                size="30"
                type="text"
                className='form-control form-color-main'
                value={description}
                onChange={(e) => setStateDescription(e.target.value)}
            />
        </div>
    )
}

export default EditorFooter
