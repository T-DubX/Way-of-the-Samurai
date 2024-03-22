import { UserType, follow , requestUsers, unfollow} from "./users-reducer"
import { usersAPI, ResponseType, UsersResponseType,  } from "../api/api";

jest.mock("../api/api")

const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>


const dispatchMock = jest.fn();
const getStateMock = jest.fn()

beforeEach(() => {
        dispatchMock.mockClear()
        getStateMock.mockClear()
        userAPIMock.follow.mockClear()
        userAPIMock.getUsers.mockClear()
        userAPIMock.unfollow.mockClear()
})

const resultForFollowUnfollow: ResponseType = {
    resultCode: 0,
    messages: [],
    data:{},
    fieldsErrors: []
}


test('success follow thunk', async () => {
    const userId = 1;

  userAPIMock.follow.mockResolvedValue(resultForFollowUnfollow);
 
  const thunk = follow(userId);
  await thunk(dispatchMock);

  expect(userAPIMock.follow).toHaveBeenCalledWith(userId);
  expect(dispatchMock).toHaveBeenCalledWith({ type: "TOGGLE-FOLLOWING-PROGRESS", userId, isFetching: true });
  expect(dispatchMock).toHaveBeenCalledWith({ type: "FOLLOW", userId });
  expect(dispatchMock).toHaveBeenCalledWith({ type: "TOGGLE-FOLLOWING-PROGRESS", userId, isFetching: false });

  expect(dispatchMock).toBeCalledTimes(3) 
}) 

test('unfollow thunk', async () => {
    const userId = 2

    userAPIMock.unfollow.mockResolvedValue(resultForFollowUnfollow)

    const thunk = unfollow(userId)
    await thunk(dispatchMock)

    expect(userAPIMock.unfollow).toHaveBeenCalledWith(userId)

    expect(dispatchMock).toHaveBeenCalledWith({ type: "TOGGLE-FOLLOWING-PROGRESS", userId, isFetching: false });
    expect(dispatchMock).toHaveBeenCalledWith({ type: "UNFOLLOW", userId });
    expect(dispatchMock).toHaveBeenCalledWith({ type: "TOGGLE-FOLLOWING-PROGRESS",userId, isFetching: true });

  expect(dispatchMock).toBeCalledTimes(3) 
})

test('get users thunk', async () => {
    const page = 1;
    const pageSize = 5;

    const resultForGetUsers: UsersResponseType<UserType[]> = {
        totalCount: 0,
        error: null ,
        items: [{
            name: 'Hello',
            id: 1,
            uniqueUrlName: '',
            photos: {
               "small":  null,
               "large":  null
            },
            status: null,
            followed: false
        }] ,
    }

    userAPIMock.getUsers.mockResolvedValue(resultForGetUsers);

    const thunk = requestUsers(1, 5)
    
    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(5)


    expect(dispatchMock).toHaveBeenNthCalledWith(1, { type: "TOGGLE-IS-FETCHING", isFetching: true });

    expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: "SET-CURRENT-PAGE", page: 1 });
    expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: "TOGGLE-IS-FETCHING", isFetching: false });
    expect(dispatchMock).toHaveBeenNthCalledWith(4, { type: "SET-USERS", users: resultForGetUsers.items });
    expect(dispatchMock).toHaveBeenNthCalledWith(5, {
    type: "SET-TOTAL-USERS-COUNT",
    count: resultForGetUsers.totalCount,
  });

    expect(userAPIMock.getUsers).toHaveBeenCalledWith(page, pageSize);
})