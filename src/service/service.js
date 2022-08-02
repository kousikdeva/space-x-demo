import axios from 'axios'

class Service {
    constructor({ baseURL }) {
        let service = axios.create({ baseURL })
        service.interceptors.response.use(this.handleSuccess)
        this.service = service
    }

    handleSuccess(response) {
        return response
    }

    async get(path) {
        let response
        try {
            response = await this.service.get(path)
        } catch (error) {
            console.log('Bad request', { path },error)
        }
        return response
    }
}

export const services = new Service({ baseURL: process.env.REACT_APP_API_BASE_URL })