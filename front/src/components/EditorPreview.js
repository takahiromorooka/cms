import React from 'react'



function EditorFooter({ title, content }) {
    const ReactMarkdown = require('react-markdown/with-html')
    return (
        <div className='editor-preview'>
            <div key='preview-title'>
                <ReactMarkdown
                    source={title}
                    escapeHtml={false}/>
            </div>
            <div key='preview-content' >
                <ReactMarkdown
                source={content}
                escapeHtml={false}/>
            </div>
        </div>
    )
}

export default EditorFooter
