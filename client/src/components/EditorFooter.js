import React from 'react'


class EditorFooter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='editor-header'>
                <div className='text-title'>Description</div>
                <input
                    size="30"
                    type="text"
                    className='form-control'
                    onChange={(e) => this.props.setStateDescription(e.target.value)}
                />
            </div>
        )
    }
}

export default EditorFooter
