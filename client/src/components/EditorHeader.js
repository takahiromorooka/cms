import React from 'react'

function EditorHeader({ setStateTitle, setStateThumbnail, setStateCategory }) {
    const categories = JSON.parse(document.getElementById('topic-editor-categories').value)
    const categoryOptions = categories.map((n) => (
            <option key={n.id} value={n.id}>
                {n.name}
            </option>
        )
    );
    return (
        <div className='editor-header'>
            <div className='row'>
                <div className='col-md-4'>
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
                <div className='col-md-4'>
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
                <div className='col-md-4'>
                    <div className='text-title'>Category</div>
                    <select className='form-control form-color-main'
                            onChange={(e) => setStateCategory(e.target.value)}>
                        <option/>
                        {categoryOptions}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default EditorHeader
