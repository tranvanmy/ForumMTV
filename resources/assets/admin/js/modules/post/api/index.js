import axios from 'axios';

export default class PostApiService {
    /**
     * @returns {AxiosPromise<any>}
     */
    static callApiListPost(params = {}) {  
        return axios.get('/api/v1/get-posts', params)
            .then(response => response)
            .catch(error => error);
    }

    /**
     * ApiDetailPost
     * @param {*} id 
     */

    static callApiDetailPost(id) {  
        return axios.get(`/api/v1/get-posts/${id}`)
            .then(response => response)
            .catch(error => error);
    }
}

