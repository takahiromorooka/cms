import React from 'react'
import EditorForm from "../components/EditorForm";
import EditorPreview from "../components/EditorPreview";

class Editor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    previewText(text) {
        this.setState({
            text: text
        })

    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <EditorForm previewText={(value) => this.previewText(value)}/>
                    </div>
                    <div className='col-md-6'>
                        <EditorPreview text={this.state.text}/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Editor
