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
            image_src: '',
            category_id: ''
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

    publishTopic () {
        axios.post('/api/v1/topics', {
                topics: {status: 2},
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

    render() {
        return (
            <div>
                <form id='editor-form' onSubmit={(e) => this.onSubmit(e)} encType="multipart/form-data"
                      acceptCharset="UTF-8">
                    <div className='editor'>
                        <EditorHeader setStateTitle={(value) => this.setStateTitle(value)}
                                      setStateThumbnail={(value) => this.setStateThumbnail(value)}
                                      setStateCategory={(value) => this.setStateCategory((value))}
                        />
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
                        <div className='row'>
                            <div className='col-md-8'>
                                <EditorFooter setStateDescription={(value) => this.setStateDescription(value)}/>
                            </div>
                            <div className='col-md-4'>
                                <input type="submit" value="下書き"
                                       className="btn btn-submit"/>
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
