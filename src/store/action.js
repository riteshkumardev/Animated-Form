import { ACTION_TYPE } from "./type";

export const setComponentData = (payload) => {
  return {
    type: ACTION_TYPE.STORE_DATA_FROM_MASTER_DATA,
    payload: payload,
  };
};
export const setPageReduxdata = (payload) => {
  return {
    type: ACTION_TYPE.SET_PAGE_REDUX_DATA,
    payload: payload,
  };
};
export const setRowsPerPageReduxData = (payload) => {
  console.log(payload, "rowPerPage");
  return {
    type: ACTION_TYPE.SET_ROW_PER_PAGE_REDUX_DATA,
    payload: payload,
  };
};
export const setCartItem = (payload) => {
  console.log(payload, "rowPerPage");
  return {
    type: ACTION_TYPE.SET_CART_ITEM_REDUX_DATA,
    payload: payload,
  };
};
