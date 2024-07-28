import { services } from "./service"

const launchesServices = {
    upcomingLaunches: async () => {
        const res = await services.get('launches/upcoming')
        return res
    },
    getLauncher: async (params) => {
        const res = await services.get(`launches/${params.id}`)
        return res
    },
    listLaunches: async () => {
        const res = await services.get(`launches?limit=20`)
        return res
    }
}

export default launchesServices