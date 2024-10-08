import axios from 'axios'

function Service({ baseURL }) {

    const service = axios.create({ baseURL: baseURL })

    async function get(path) {
        let response
        try {
            response = await service.get(path)
        } catch (error) {
            console.error('Bad request', { path }, error)
        }
        return response
    }

    return {
        get
    }
}

export const services = Service({ baseURL: 'https://api.spacexdata.com/v3' })