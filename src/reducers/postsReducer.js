export default (state = [], action) => {
    // bad!:
    // return document.querySelector('input');

    // bad: 
    // return axios.get('/posts);

    // good:
    // return state + action

    // bad!
    // state[0] = "Sam"
    // state.pop();
    // state.push();

    // bad!
    // state.name = "Sam"
    // state.age = 30;

    switch (action.type) {
        case 'FETECH_POSTS':
            return action.payload;
        default:
          return state;
    }
};