import React from 'react'


class EditorElementButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            image:'<img src="画像URL" alt="" />',
            head_l: '<h1>大見出し</h1>',
            head_m: '<h2>中見出し</h2>',
            head_s: '<h3>小見出し</h3>',
            html: '',
        }
    }

    addStringToTextArea(html) {
        console.log(html)
        this.setState({
            html: html
        })
        document.getElementById('editor_content').value += this.state.html + "\n";
        console.log(document.getElementById('editor_content').value)
    }

    render() {
        return (
            <div>
                <input type="button" value='画像'
                       onClick={() => this.addStringToTextArea(this.state.image)}/>
                <input type="button" value='大見出し'
                       onClick={() => this.addStringToTextArea(this.state.head_l)}/>
                <input type="button" value='中見出し'
                       onClick={() => this.addStringToTextArea(this.state.head_m)}/>
                <input type="button" value='小見出し'
                       onClick={() => this.addStringToTextArea(this.state.head_s)}/>
            </div>
        )
    }
}

export default EditorElementButton
