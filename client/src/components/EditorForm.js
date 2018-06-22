import React from 'react'


class EditorForm extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <div className='text-title'>Text</div>
                <textarea
                    id="page_content"
                    name="page[content]"
                    rows="20"
                    className='form-control'
                    onChange={(e) => this.props.setStateText(e.target.value)}/>
            </div>
        )
    }
}

export default EditorForm
