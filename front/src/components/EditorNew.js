import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import EditorForm from "../components/EditorForm";
import EditorPreview from "../components/EditorPreview";
import EditorHeader from "../components/EditorHeader";
import EditorFooter from "../components/EditorFooter";
import TopicsApi from "../api/topics";


class EditorNew extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            description: '',
            thumbnail: '',
            image_src: '',
            category_id: '',
        }
    }

    componentDidMount() {
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
            // image_src: createObjectURL(thumbnail[0])
        })

    }

    publishTopic() {
        TopicsApi.publishTopic(topicId)
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

        TopicsApi.saveTopics(params)
            console.log(params)
            .then(data => {
                console.log(data)
                alert('保存に成功しました。')
                location.href = "http://localhost:3000/admin/topics/" + data.id + '/edit';
            })
            .catch(error => {
                alert(error.data)
            })
    }

    render() {
        return (
            <div>
                <form id='editor-form' onSubmit={(e) => this.onSubmit(e)} >
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
                                <input type="submit" value="下書き" className="btn btn-submit"/>
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


export default EditorNew
