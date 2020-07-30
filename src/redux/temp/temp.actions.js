import { API, Endpoints } from "../../constants";
import { tempConstants } from "./temp.constants";

export const getInfo = () => {
  const {
    GET_INFO_REQUEST,
    GET_INFO_SUCCESS,
    GET_INFO_FAILURE,
  } = tempConstants;
  const request = () => ({ type: GET_INFO_REQUEST });
  const success = (data) => ({ type: GET_INFO_SUCCESS, data });
  const failure = () => ({ type: GET_INFO_FAILURE });

  return async function (dispatch) {
    dispatch(request());
    try {
      const data = await API.get(`${Endpoints.TEMP}`);
      console.log("data =", data);
      dispatch(success(""));
    } catch (err) {
      dispatch(failure());
    }
  };
};
