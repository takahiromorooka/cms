import React from 'react'
import remark from "remark";
import reactRenderer from "remark-react";


class EditorPreview extends React.Component {
    constructor(props) {
        super (props)
    }


    render() {
        return (
            <div className='editor-preview'>
                {remark().use(reactRenderer).processSync(this.props.text).contents}
            </div>
        )
    }
}

export default EditorPreview
