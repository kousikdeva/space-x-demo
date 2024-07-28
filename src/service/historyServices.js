import { services } from "./service"

const historyServices = {
    listHistories: async () => {
        const res = await services.get('history')
        return res
    },
    getHistory: async (params) => {
        const res = await services.get(`history/${params.id}`)
        return res
    }
}

export default historyServices