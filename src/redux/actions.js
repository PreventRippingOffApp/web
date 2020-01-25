import { GET_DATA } from "./actionTypes";

export const getData = () => {
  return {
    type: GET_DATA,
    // sample dataset
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