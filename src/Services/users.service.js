import { $http } from "@/plugins/axios"

const key = 'users'
export default {
    async getAllUsers(params) {
        let res = await $http.get(key, {params})
        return res.data
    }
}