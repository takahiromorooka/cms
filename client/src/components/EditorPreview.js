import React from 'react'
import remark from "remark";
import reactRenderer from "remark-react";


class EditorPreview extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='editor-preview'>
                <div key='preview-title'>
                    {remark().use(reactRenderer).processSync(this.props.title).contents}
                </div>
                <div key='preview-content'>
                    {remark().use(reactRenderer).processSync(this.props.content).contents}
                </div>
            </div>
        )
    }
}

export default EditorPreview
