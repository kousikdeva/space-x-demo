import { services } from "./service"

const rocketsServices = {
    listRockets: async () => {
        const res = await services.get('rockets')
        return res
    },
    getRockets: async (params) => {
        const res = await services.get(`rockets/${params}`)
        return res
    }
}

export default rocketsServices