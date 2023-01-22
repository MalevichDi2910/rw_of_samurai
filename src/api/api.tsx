import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '11368727-b5c7-4d8a-ab06-382697578716'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
       return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string){
        return instance.put(`profile/status/`,{ status: status })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


