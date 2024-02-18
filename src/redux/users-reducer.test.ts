import {InitialUsersStateType, setUsers, usersReducer, UserType} from "./users-reducer";

let state: InitialUsersStateType
let users: UserType[]
beforeEach(() => {
   state = {
      users: [] as UserType[],
      pageSize: 5,
      totalUsersCount: 0,
      currentPage: 1,
      isFetching: true,
      followingInProgress: [] as number[] | never[]
   }

   users = [{
      name: 'Pavel',
      id: 10,
      uniqueUrlName: '',
      photos: {
         small: null,
         large: null
      },
      status: 'I am Pavel',
      followed: false
   }, {
      name: 'Anton',
      id: 1,
      uniqueUrlName: null,
      photos: {
         small: null,
         large: null
      },
      status: null,
      followed: false
   }]
})

it('length should be at data acquisition', () => {
   const action = setUsers(users)
   const newState = usersReducer(state, action)


   expect(newState.users.length).toBe(2)
})