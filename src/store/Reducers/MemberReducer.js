import * as types from "../Actions/ActionTypes";

const initialState = {
    members: [],
    added: false,
    removed: false,
    selectedKey: null
};

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const getMembers = (state, action) => {
    return updateObject(state, {members: action.members, added: false, removed: false});
};

const addMember = (state, action) => {
    return updateObject(state, {added: true, removed: false});
};

const removeMember = (state, action) => {
    return updateObject(state, {added: false, removed: true, members:
            state.members.filter(mem => mem.key !== action.selectedKey)});
};

const MemberReducer = (state=initialState, action) => {

    switch (action.type) {
        case types.GET_MEMBER: return getMembers(state, action);
        case types.ADD_MEMBER: return addMember(state, action);
        case types.REMOVE_MEMBER: return removeMember(state, action);
        default: return state;
    }
};

export default MemberReducer;