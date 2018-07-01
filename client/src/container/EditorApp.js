import React from 'react'
import axios from 'axios'
import EditorForm from "../components/EditorForm";
import EditorPreview from "../components/EditorPreview";
import EditorHeader from "../components/EditorHeader";
import EditorFooter from "../components/EditorFooter";

class Editor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            description: '',
            thumbnail: '',
            image_src: ''
        }
    }

    setStateTitle(title) {
        this.setState({
            title: title
        })
    }

    setStateText(content) {
        this.setState({
            content: content
        })

    }

    setStateDescription(description) {
        this.setState({
            description: description
        })

    }

    setStateThumbnail(thumbnail) {
        const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

        this.setState({
            thumbnail: thumbnail,
            image_src: createObjectURL(thumbnail[0])
        })

    }

    onSubmit(e) {
        e.preventDefault()

               // const form = $('#editor-form').get()[0];
        // console.log(form)
        // form.append()

        // FormData オブジェクトを作成
        const formData = new FormData();
        formData.append('file', this.state.thumbnail[0])
        console.log(formData.get('file'))


        const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
        const params = {
            title: this.state.title,
            content: this.state.content,
            description: this.state.description,
            thumbnail: this.state.thumbnail[0]
        }
        console.log(params)

        axios.post('/api/v1/topics', {
                topics: params,
            }
        )
            .then(function (response) {
                alert(' 保存に成功しました。')
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <form id='editor-form' onSubmit={(e) => this.onSubmit(e)} encType="multipart/form-data" acceptCharset="UTF-8" >
                    <div className='editor'>
                        <EditorHeader setStateTitle={(value) => this.setStateTitle(value)}
                                      setStateThumbnail={(value) => this.setStateThumbnail(value)}/>
                        {/*<img src={this.state.image_src} />*/}
                        <hr/>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='editor-form'>
                                    <EditorForm setStateText={(value) => this.setStateText(value)}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='editor-preview'>
                                    <EditorPreview content={this.state.content} title={this.state.title}/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <EditorFooter setStateDescription={(value) => this.setStateDescription(value)}/>
                    </div>
                    <input type="submit" value="保存"
                           className="btn btn-main btn-default"/>
                </form>
            </div>
        )
    }
}

export default Editor
