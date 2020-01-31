import { SEARCH_FORM_OPEN, GET_DATA } from "./actionTypes";
import axios from "axios";

export const handleSearchFormOpen = (isOpen) => {
  return {
    type: SEARCH_FORM_OPEN,
    searchForm: !isOpen
  }
}

export const getData = () => 
{
  return function(dispatch){
    axios
      .get("https://b.sechack.dev/sendAudioList")
      .then(res => {
        const data = res.data.audioList.map((d, i) => {
          return {
            id: i,
            date: d.time,
            position: {
              name: d.prefecture,
              longitude: d.location[0],
              latitude: d.location[1]
            },
            url: d.path,
              }
            })
        dispatch({
          type: GET_DATA,
          data: data
        })
      }).catch(err => {
        return {
          type: GET_DATA,
          data:[]
      }
    })
  }
}
