import {followSuccess, InitialUsersStateType, setUsers, unfollowSuccess, usersReducer, UserType} from "./users-reducer";

let state: InitialUsersStateType
beforeEach(() => {
   state = {
      users: [{
         name: 'Pavel',
         id: 1,
         uniqueUrlName: '',
         photos: {
            small: null,
            large: null
         },
         status: 'I am Pavel',
         followed: false
      }, {
         name: 'Anton',
         id: 2,
         uniqueUrlName: null,
         photos: {
            small: null,
            large: null
         },
         status: null,
         followed: false
      }],
      pageSize: 5,
      totalUsersCount: 0,
      currentPage: 1,
      isFetching: true,
      followingInProgress: [] as number[] | never[]

   }

})

test('length should be at data acquisition', () => {
   const action = setUsers(state.users)
   const newState = usersReducer(state, action)


   expect(newState.users.length).toBe(2)
})

test('follow success' , () => {
   const action = followSuccess(1)
   const newState = usersReducer(state, action)

   expect(newState.users[0].followed).toBeTruthy()
   expect(newState.users[1].followed).toBeFalsy()
})

test('unfollow success' , () => {
   const action = unfollowSuccess(2)
   const newState = usersReducer(state, action)

   expect(newState.users[0].followed).toBeFalsy()
   expect(newState.users[1].followed).toBeTruthy()
})