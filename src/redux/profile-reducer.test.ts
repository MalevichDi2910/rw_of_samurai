import profileReducer, {addPostActionCreator, deletePost, InitialStateType} from "./profile-reducer";

let state: InitialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", like: 0},
        {id: 2, message: "It's my first post", like: 29},
    ],
    profile: null,
    status: ''
};

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator('Di developer')

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {

    let action = addPostActionCreator('Di developer')

    let newState = profileReducer(state,action);

    expect(newState.posts[2].message).toBe('Di developer')
});

test('after deleting length of posts should be decrement', () => {

    let action = deletePost(1)

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(2)
});

test(`after deleting length of posts shouldn't be decrement`, () => {

    let action = deletePost(1000)

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(2)
});



