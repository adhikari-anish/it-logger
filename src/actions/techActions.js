import {
  GET_TECHS,
  TECHS_ERROR,
  SET_LOADING,
  ADD_TECH,
  DELETE_TECH
} from "./types";

// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add techs from server
export const addTechs = tech => async dispatch => {
  try {
    // dispatch(setLoading());

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err
    });
  }
};

// Delete techs from server
export const deleteTech = id => async dispatch => {
  try {
    // dispatch(setLoading());

    await fetch(`/techs/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
