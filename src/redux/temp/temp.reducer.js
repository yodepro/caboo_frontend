import { createReducer } from "@reduxjs/toolkit";
import { tempConstants } from "./temp.constants";

export const getInfoRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

export const getInfoSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    info: action.data,
  };
};

export const getInfoFailure = (state, action) => {
  return {
    ...state,
    loading: false,
  };
};

const initialState = { data: undefined, loading: false };

export const temp = createReducer(initialState, {
  [tempConstants.GET_INFO_REQUEST]: getInfoRequest,
  [tempConstants.GET_INFO_SUCCESS]: getInfoSuccess,
  [tempConstants.GET_INFO_FAILURE]: getInfoFailure,
});
