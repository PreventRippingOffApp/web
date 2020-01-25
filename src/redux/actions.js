import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_DATA } from "./actionTypes";

// let nextTodoId = 0;

// export const addTodo = content => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content
//   }
// });

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const getData = () => {
  return {
    type: GET_DATA,
    data: [
      {
        id: 0,
        date: 'YYYY/MM/DD',
        position: {
          name: 'timei',
          longitude: 'ido',
          latidude: 'keido'
        },
        url: ''
      },
      {
        id: 1,
        date: 'YYYY/MM/DD',
        position: {
          name: 'timei',
          longitude: 'ido',
          latidude: 'keido'
        },
        url: ''
      },
      {
        id: 2,
        date: 'YYYY/MM/DD',
        position: {
          name: 'timei',
          longitude: 'ido',
          latidude: 'keido'
        },
        url: ''
      },
      {
        id: 3,
        date: 'YYYY/MM/DD',
        position: {
          name: 'timei',
          longitude: 'ido',
          latidude: 'keido'
        },
        url: ''
      }
    ]
  }
}