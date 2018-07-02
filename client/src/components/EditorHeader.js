import React from 'react'

function EditorHeader({ setStateTitle, setStateThumbnail }) {
    return (
        <div className='editor-header'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='text-title'>Title</div>
                    <input
                        id="page_title"
                        name="page[title]"
                        size="30"
                        type="text"
                        className='form-control form-color-main'
                        onChange={(e) => setStateTitle(e.target.value)}
                    />
                </div>
                <div className='col-md-6'>
                    <div className='text-title'>Thumbnail</div>
                    <input
                        id="page_fine_name"
                        name="page[fine_name]"
                        size="30"
                        type="file"
                        className='form-control form-color-main'
                        onChange={(e) => setStateThumbnail(e.target.files)}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditorHeader
