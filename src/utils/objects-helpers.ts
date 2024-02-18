import {UserType} from "../redux/users-reducer";

type ObjPropName = 'id'
type NewObjProps = {
   followed: boolean
}

export const updateObjectInArray = (items: UserType[], itemId: number, objPropName: ObjPropName, newObjProps: NewObjProps) => {
   return items.map(u => u[objPropName] === itemId
      ? {...u, ...newObjProps}
      : u)
}
