import * as types from "./ActionTypes";

import axios from 'axios';
import {API_URL} from "../../globals/Global";

const fetchSuccess = (data) => {
    return {
        type: types.GET_MEMBER,
        members: data
    }
};

const fetchFail = (error) => {
    return {
        type: types.GET_MEMBER_FAIL,
        members: {}
    }
};

export const fetchMembers = () => {
   return (dispatch => {
       axios.get(API_URL + "/members.json")
           .then(resp => {
               const data = [];
               for(let key in resp.data) {
                    data.push({key: key, name: resp.data[key].name})
               }
               dispatch(fetchSuccess(data))
           })
           .catch(error => dispatch(fetchFail(error)))
   });
};

const addSuccess = (resp) => {
    return {
        type: types.ADD_MEMBER
    }
};

const addFail = (error) => {
    return {
        type: types.ADD_MEMBER_FAIL
    }
};

export const addMember = (member) => {
    return (dispatch => {
        axios.post(API_URL + "/members.json", member)
            .then(resp => {
                dispatch(addSuccess(resp));
                dispatch(fetchMembers());
            })
            .catch(error => {
                dispatch(addFail(error))
            })
    })
};

const removeSuccess = (key) => {
    return {
        type: types.REMOVE_MEMBER,
        selectedKey: key
    }
};

const removeFail = (error) => {
    return {
        type: types.REMOVE_MEMBER_FAIL
    }
};

export const removeMember = (key) => {
    return (dispatch => {
        axios.delete(API_URL + "/members/" + key +".json")
            .then(resp => {
                dispatch(removeSuccess(key));
            })
            .catch(error => {
                dispatch(removeFail(error))
            })
    })
};