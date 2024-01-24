import {addPostAC, deletePost, InitialStateType, profileReducer} from "./profile-reducer";

let state: InitialStateType
beforeEach(() => {
   state = {
      posts: [
         {id: '1', message: 'It`s our new program! Hey!', likesCount: 12},
         {id: '2', message: 'It`s my first posts', likesCount: 11},
      ],
      profile: null,
      status: '',
   }
})

it('length of should be incremented', () => {
      const action = addPostAC('bla-bla')
      const newState = profileReducer(state, action)

      expect(newState.posts.length).toBe(3)
   }
)

it('message of new post should be correct', () => {
   const action = addPostAC('bla-bla')
   const newState = profileReducer(state, action)

   expect(newState.posts[0].message).toBe('bla-bla')
})

it('after deleting length of messages should be decrement', () => {
   const action = deletePost('1')
   const newState = profileReducer(state, action)

   expect(newState.posts.length).toBe(1)
   expect(newState.posts[0].message).toBe('It`s my first posts')

})

it('after deleting shouldn`t be decrement if id is incorrect', () => {
   const action = deletePost('1000')
   const newState = profileReducer(state, action)

   expect(newState.posts.length).toBe(2)

})
