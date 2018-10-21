import React from 'react'
import styled from 'styled-components';
import TopicsApi from "../api/topics";


const Modal = styled.div`
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, .8);
        justify-content: center;
        position: fixed;
        display: flex;
        z-index: 10000;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
`

const Card = styled.div`
  align-self: center;
  color: #000000;
  display: block;
  background: #ffffff;
  width: 50%;
  padding: 10px;

  
  * {
    color: #333;
  }
`

function getRelatedTopicInfo(url, addStringToTextArea, closeRelatedModal) {
    TopicsApi.getRelatedTopicInfo(url)
        .then(data => {
            console.log(data)
            console.log(data.topic.description)
            const description = data.topic.description.replace(/\n/g, '')
            addStringToTextArea(
                '<div class="related-topic-elements">' + "\n" +
                    '<div class="related-topic-container">'  + "\n" +
                        `<a href='${url}' target="_blank">` + "\n" +
                            '<div class="related-topic-top-container">'+ "\n" +
                                `<img src="${data.topic.thumbnail}" alt="サムネイル" />` + '\n' +
                                `<p class="related-element-title">${data.topic.title}</p>` + "\n" +
                            '</div>'+ '\n' +
                            '<div class="related-topic-bottom-container">'+ "\n" +
                                `<p class="related-topic-bottom-container">${description}</p>` + "\n" +
                            '</div>'+ '\n' +
                        '</a>' + '\n' +
                    '</div>' + '\n' +
                '</div>'
            )
            closeRelatedModal()
        })
        .catch(error => {

        })
}

function  RelatedModal({closeRelatedModal, addStringToTextArea}) {

    return (
        <div>
            <Modal>
                <Card>
                    <label>URL</label>
                    <input type="text" className='form-control' onChange={(e) => getRelatedTopicInfo(e.target.value, addStringToTextArea, closeRelatedModal)}  placeholder="サイトのURLを入力してください。"/>
                </Card>

            </Modal>

        </div>
    )
}

export default RelatedModal
