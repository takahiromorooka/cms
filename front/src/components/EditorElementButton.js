import React from 'react'
import RelatedModal from "./RelatedModal";


class EditorElementButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            image: '<div class="">' + "\n" +  '<img src="" alt="" />' + "\n" + '</div>' ,
            head_l: '<h1 class="" >大見出し</h1>',
            head_m: '<h2 class="">中見出し</h2>',
            head_s: '<h3 class="">小見出し</h3>',
            list: '<p>リストタイトル</p>' + "\n" + '<ul>' + "\n" + '<li>リスト</li>'+ "\n" + '</ul>',
            blockquote: '<blockquote>' + "\n" + '<p>引用文言</p>' + "\n" + '<cite>引用URL</cite>' + "\n" + "</blockquote>",
            relation: '',
            button: '<a href="URL" class="square_btn">' + 'ボタン' + '</a>',
            relatedModal: false
        }
    }

    addStringToTextArea(html) {
        this.props.setStateText(document.getElementById('editor-content').value += "\n" + html)
    }

    openRelatedModal() {
        this.setState({
            relatedModal: true
        })
    }

    closeRelatedModal() {
        this.setState({
            relatedModal: false
        })
    }

    render() {
        return (
            <div>
                {this.state.relatedModal ?  <RelatedModal closeRelatedModal={() => this.closeRelatedModal()}
                                                          addStringToTextArea={(e) => this.addStringToTextArea(e)} /> : '' }
                <input type="button" value='画像'
                       onClick={() => this.addStringToTextArea(this.state.image)} className={'btn btn-main'}/>
                <input type="button" value='大見出し'
                       onClick={() => this.addStringToTextArea(this.state.head_l)} className={'btn btn-main'}/>
                <input type="button" value='中見出し'
                       onClick={() => this.addStringToTextArea(this.state.head_m)} className={'btn btn-main'}/>
                <input type="button" value='小見出し'
                       onClick={() => this.addStringToTextArea(this.state.head_s)} className={'btn btn-main'}/>
                <input type="button" value='リスト'
                       onClick={() => this.addStringToTextArea(this.state.list)} className={'btn btn-main'}/>
                <input type="button" value='引用'
                       onClick={() => this.addStringToTextArea(this.state.blockquote)} className={'btn btn-main'}/>
                <input type="button" value='関連'
                       onClick={() => this.openRelatedModal()} className={'btn btn-main'}/>
                <input type="button" value='ボタン'
                       onClick={() => this.addStringToTextArea(this.state.button)} className={'btn btn-main'}/>
            </div>
        )
    }
}

export default EditorElementButton
