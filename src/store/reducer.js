import { ACTION_TYPE } from "./type";
import masterProduct from "../masterProduct.json";
const masterData = masterProduct;
const initialState = {
  masterdata: masterData,
  page: 1,
  rowPerPage: 12,
  cartItem: [],
  data: [],
};

export const ReduxReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.STORE_DATA_FROM_MASTER_DATA:
      return {
        ...state,
        data: payload,
      };
    case ACTION_TYPE.SET_PAGE_REDUX_DATA:
      return {
        ...state,
        page: payload,
      };
    case ACTION_TYPE.SET_ROW_PER_PAGE_REDUX_DATA:
      return {
        ...state,
        rowPerPage: payload,
      };
    case ACTION_TYPE.SET_CART_ITEM_REDUX_DATA:
      return {
        ...state,
        cartItem: [...state.cartItem, payload],
      };
    default:
      return state;
  }
};
