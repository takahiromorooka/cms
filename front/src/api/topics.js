import axios from 'axios';
import ApiBase from "./apiBase";

class TopicsApi extends ApiBase {

    static fetchTopic(topicId) {
        const baseUrl = this.defaultBaseUrl()

        return new Promise(function (resolve, reject) {
            axios.get(baseUrl + '/topics/' + topicId, {})
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data))
        })
    }

    static saveTopics(params) {
        const baseUrl = this.defaultBaseUrl()

        return new Promise(function (resolve, reject) {
            axios.post(baseUrl + '/topics', {
                topics: params
            })
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data))
        })
    }

    static updateTopic(params, topicId) {
        const baseUrl = this.defaultBaseUrl()

        return new Promise(function (resolve, reject) {
            axios.put(baseUrl + '/topics/' + topicId, {
                topics: params
            })
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data))
        })
    }

    static publishTopic(topicId) {
        const baseUrl = this.defaultBaseUrl()

        return new Promise(function (resolve, reject) {
            axios.put(baseUrl + 'topics', {
                topics: {
                    status: 1,
                    topic_id: topicId
                }
            })
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data))
        })

    }

}

export default TopicsApi;


