import React from 'react'
import RelatedModal from "./RelatedModal";
import styled from 'styled-components'

const ElementButton = styled.div`
        .btn-main {
            margin-right: 10px;
            margin-bottom: 20px;
        }
`


class EditorElementButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            image: '<div class="article-img-area item">' + "\n" + '<img src="" alt="" />' + "\n" + '</div>' ,
            head_l: '<div id="目次用に番号を振ってください" class="article-big-heaher-area item">'+ "\n " +'<div class="text-huge back-front">Section番号を振ってください</div>'+ "\n " +'<h2 class="title text-navy" >大見出し</h2>'+ "\n" +'</div>',
            head_m: '<div class="article-middle-header-area item">'+ "\n " +'<div class="text-huge back-front">SubSection</div>'+ "\n " +'<h3 class="title" >中見出し</h3>'+ "\n" +'</div>',
            head_s: '<div class="article-small-header-area item">'+ "\n " +'<h4 class="text-bold">小見出し</h4></div>',
            list: '<div class="article-list-area">'+ "\n" + '<p class="title text-bold text-ex-large">リストタイトル</p>' + "\n" + '<ul>' + "\n" + '<li>リスト</li>'+ "\n" + '<li>リスト</li>'+ "\n" + '<li>リスト</li>'+ "\n" + '</ul>'+ "\n" +'</div>',
            blockquote: '<div class="article-quote-area item">' + "\n" +'<blockquote>' + "\n" + '<p>引用文言</p>' + "\n" + '<cite>引用URL</cite>' + "\n" + '</blockquote>'+ "\n" +'</div>',
            relation: '',
            button: '<div class="article-button-area item">' + "\n" + '<a href="URL" class="square_btn text-ex-large">' + 'ボタン' + '</a>' + "\n" + '</div>',
            text: '<div class="article-text-area item">' + "\n" + '<p>テキスト</p>' + "\n" + '</div>',
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
            <ElementButton>
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
                <input type="button" value='テキスト'
                       onClick={() => this.addStringToTextArea(this.state.text)} className={'btn btn-main'}/>
            </ElementButton>
        )
    }
}

export default EditorElementButton
