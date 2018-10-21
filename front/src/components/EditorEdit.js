import React from 'react'
import ReactDOM from 'react-dom'
import TopicsApi from "../api/topics";
import EditorHeader from "./EditorHeader";
import EditorForm from "./EditorForm";
import EditorPreview from "./EditorPreview";
import EditorFooter from "./EditorFooter";
const querystring = require('querystring');


class EditorEdit extends React.Component {
    constructor(props) {
        super(props)
        const topicId = document.getElementById("topicEditor").getAttribute('data-topic-id')

        this.state = {
            title: '',
            content: '',
            description: '',
            status: '',
            thumbnail: '',
            category_id: '',
            topicId: topicId,
        }
    }

    componentDidMount() {
        TopicsApi.fetchTopic(this.state.topicId)
            .then(data => {
                this.setState({
                    title: data.title,
                    content: data.content,
                    description: data.description,
                    category_id: data.category_id,
                    status: data.status
                })
            })
            .catch(error => {
                alert('エラーが発生しました。')
            })
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

    setStateCategory(category_id) {

        this.setState({
            category_id: category_id,
        })

    }

    setStateThumbnail(thumbnail) {

        this.setState({
            thumbnail: thumbnail,
        })

    }

    publishTopic(status) {
        TopicsApi.publishTopic(this.state.topicId, status)
            .then(data => {
                {status === 0 ?
                    alert('記事を非公開に変更しました。')
                    : alert('記事を公開しました。')}
                this.setState({status: status})
            })
            .catch(error => {
                alert(error.data)
                }
            )
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.thumbnail[0])
        let formData = new FormData()
        console.log(formData)
        formData.append("file", this.state.thumbnail[0])
        console.log(formData)
        console.log(formData.get('file'))
        const params = {
            title: this.state.title,
            content: this.state.content,
            description: this.state.description,
            thumbnail: formData,
            category_id: this.state.category_id
        }

        TopicsApi.updateTopic(params, this.state.topicId)
            .then(data => {
                alert(' 編集に成功しました。')
            })
            .catch(error => {
                alert(error.data)
            })
    }

    render() {
        return (
            <div>
                <form id='editor-form' onSubmit={(e) => this.onSubmit(e)} encType="multipart/form-data"
                      acceptCharset="UTF-8">
                    <div className='editor'>
                        <EditorHeader
                            title={this.state.title}
                            category_id={this.state.category_id}
                            setStateTitle={(value) => this.setStateTitle(value)}
                            setStateThumbnail={(value) => this.setStateThumbnail(value)}
                            setStateCategory={(value) => this.setStateCategory((value))}
                        />
                        <hr/>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='editor-form'>
                                    <EditorForm
                                        content={this.state.content}
                                        setStateText={(value) => this.setStateText(value)}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='editor-preview'>
                                    <EditorPreview content={this.state.content} title={this.state.title}/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className='row'>
                            <div className='col-md-8'>
                                <EditorFooter
                                    description={this.state.description}
                                    setStateDescription={(value) => this.setStateDescription(value)}/>
                            </div>
                            <div className='col-md-4'>
                                <input type="submit" value="編集" className="btn btn-submit"/>
                                {this.state.status === 0 ?
                                    <input type="button" value="公開" onClick={() => this.publishTopic(1)}
                                                                 className="btn btn-submit"/>
                                    : <input type="button" value="非公開" onClick={() => this.publishTopic(0)}
                                             className="btn btn-submit"/>}

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditorEdit
