import {UserType} from "../redux/users-reducer";

export const updateObjectInArray = (items: UserType[], itemId: number, objPropName: any, newObjProps: {followed: boolean}) => {
    return items.map(u => u[objPropName as keyof UserType] === itemId ? {...u, ...newObjProps} : u)
}