import React from 'react'
import axios from 'axios'
import EditorForm from "../components/EditorForm";
import EditorPreview from "../components/EditorPreview";
import EditorHeader from "../components/EditorHeader";
import EditorFooter from "../components/EditorFooter";

class Editor extends React.Component {
    constructor(props) {
        super(props)
        const action = document.getElementById('topic-editor-action').value

        this.state = {
            title: '',
            content: '',
            description: '',
            thumbnail: '',
            image_src: '',
            category_id: '',
            action: action
        }
    }

    componentDidMount() {
        if (this.state.action === 'edit') {
            const self = this;
            const topicId = document.getElementById('topic-id').value
            axios.get('/api/v1/topics', {
                params: {id: topicId}
            })
                .then(function (response) {
                    self.setState({
                        title: response.data.title,
                        content: response.data.content,
                        description: response.data.description,
                        thumbnail: '',
                        image_src: '',
                        category_id: response.data.category.id
                    })

                })
                .catch(function (error) {
                    alert('エラーが発生しました。')
                    console.log(error)
                })
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
        const topicId = document.getElementById('topic-id').value
        axios.patch('/api/v1/topics', {
                topics: {status: 2},
                id: topicId
            }
        )
            .then(function (response) {
                alert(' 公開しました。')
            })
            .catch(function (error) {
                alert('公開に失敗しました。')
                console.log(error)
            })
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
        console.log(params)
        if (this.state.action === 'new') {
            axios.post('/api/v1/topics', {
                    topics: params,
                }
            )
                .then(function (response) {
                    alert(' 保存に成功しました。')
                })
                .catch(function (error) {
                    alert('保存に失敗しました。')
                    console.log(error)
                })

        }
        if (this.state.action === 'edit') {
            const topicId = document.getElementById('topic-id').value
            axios.patch('/api/v1/topics', {
                    id: topicId,
                    topics: params
                }
            )
                .then(function (response) {
                    alert(' 更新に成功しました。')
                })
                .catch(function (error) {
                    alert('更新に失敗しました。')
                    console.log(error)
                })
        }
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
                                {
                                    (() => {
                                        if (this.state.action === 'new') {
                                            return <input type="submit" value="下書き" className="btn btn-submit"/>
                                        }
                                        if (this.state.action === 'edit') {
                                            return <input type="submit" value="更新" className="btn btn-submit"/>;
                                        }
                                    })()
                                }
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

export default Editor
