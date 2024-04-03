import axios from "axios";
import {ProfileInfoProps} from "../components/Profile/ProfileInfo/ProfileInfo";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '0d847ad6-c3f6-40fa-ab15-87d3cb3271a4'
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
        return instance.get<string>(`profile/status/` + userId)
    },
    updateStatus(status: string){
        return instance.put<ResponseType<string>>(`profile/status`,{ status: status })
    },
    savePhoto(photoFile: File) {
        let formData = new FormData();
        formData.append('image', photoFile)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileInfoProps) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    logIn(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
}


/*types */

export type ResponseType<T = {}> = {
    resultCode: number
    messages: string[],
        data: T
}

