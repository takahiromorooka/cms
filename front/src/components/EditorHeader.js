import React from 'react'

function EditorHeader({title, category_id, setStateTitle, setStateThumbnail, setStateCategory}) {
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
                        value={title}
                        className='form-control form-color-main'
                        onChange={(e) => setStateTitle(e.target.value)}
                    />
                </div>
                <div className='col-md-4'>
                    <div className='text-title'>Thumbnail</div>
                    <input
                        size="30"
                        type="file"
                        name="thumbnail"
                        className='form-control form-color-main'
                        onChange={(e) => setStateThumbnail(e.target.files)}
                    />
                </div>
                <div className='col-md-4'>
                    <div className='text-title'>Category</div>
                    <select className='form-control form-color-main'
                            onChange={(e) => setStateCategory(e.target.value)}
                            value={category_id}>
                        <option/>
                        {categoryOptions}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default EditorHeader
