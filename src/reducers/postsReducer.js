export default (state, action) => {
    return null;

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
};