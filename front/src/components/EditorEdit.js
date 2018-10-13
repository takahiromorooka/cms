import React from 'react'
import ReactDOM from 'react-dom'
import TopicsApi from "../api/topics";
import EditorHeader from "./EditorHeader";
import EditorForm from "./EditorForm";
import EditorPreview from "./EditorPreview";
import EditorFooter from "./EditorFooter";


class EditorEdit extends React.Component {
    constructor(props) {
        super(props)
        const topicId = document.getElementById("topicEditor").getAttribute('data-topic-id')

        this.state = {
            title: '',
            content: '',
            description: '',
            thumbnail: '',
            image_src: '',
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
            image_src: createObjectURL(thumbnail[0])
        })

    }

    publishTopic() {
        TopicsApi.publishTopic(this.state.topicId)
            .then(data => {
                alert('公開に成功しました。')
            })
            .catch(error => {
                alert(error.data)
                }
            )
    }

    onSubmit(e) {
        e.preventDefault()
        const params = {
            title: this.state.title,
            content: this.state.content,
            description: this.state.description,
            thumbnail: this.state.thumbnail[0],
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
                                <input type="button" value="公開" onClick={() => this.publishTopic()}
                                       className="btn btn-submit"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditorEdit
