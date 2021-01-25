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


// =============================================================================
// Coding Exercise 13: Adding a Reducer Case:
// export default (state = [], action) => {
//     switch (action.type) {
//         case 'FETCH_POSTS':
//             return action.payload;
//         default:
//             return state;
//     }
// }


// Solution:
// export default (state = [], action) => {
//     switch (action.type) {
//         case 'FETCH_POSTS':
//             return action.payload;
//          case 'ADD_POST':
//              return [...state, payload.action]
//         default:
//             return state;
//     }
// }
