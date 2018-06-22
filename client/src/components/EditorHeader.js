import React from 'react'


class EditorHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
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
                            className='form-control'
                            onChange={(e) => this.props.setStateTitle(e.target.value)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <div className='text-title'>Thumbnail</div>
                        <input
                            id="page_fine_name"
                            name="page[fine_name]"
                            size="30"
                            type="file"
                            className='form-control'
                            onChange={(e) => this.props.setStateThumbnail(e.target.files[0])}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default EditorHeader
