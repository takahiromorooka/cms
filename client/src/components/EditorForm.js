import React from 'react'


class EditorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '# test'
        }
    }


    render() {
        return (
            <div>
                <textarea
                    id="page_content"
                    name="page[content]"
                    rows="20"
                onChange={(e) => this.props.previewText(e.target.value)}/>
            </div>
        )
    }
}

export default EditorForm
