const ADD_TO_CART = 'ADD_TO_CART';
const ADD_TO_COUNT = 'ADD_TO_COUNT';
const DELETE_TO_COUNT = 'DELETE_TO_COUNT';
const EMPTY_CART = 'EMPTY_CART';

const initialState = {
  products: [],
};

const basketReducer = (
  state = initialState,
  action: {type: any; payload: {'': any}},
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemI = state.products.find(
        product => product.id === action.payload.product.id,
      );
      if (itemI) {
        itemI.quantity += 1;
        return {...state, products: [...state.products]};
      }
      return {...state, products: [...state.products, action.payload.product]};
    case EMPTY_CART:
      const itemsInCart = state.products;
      itemsInCart.forEach(item => (item.quantity = 1));
      return {
        products: [],
      };
    case ADD_TO_COUNT:
      const item = state.products.find(
        product => product.id === action.payload.product.id,
      );
      if (item) item.quantity += 1;
      return {...state, products: [...state.products]};
    case DELETE_TO_COUNT:
      const itemDel = state.products.find(
        product => product.id === action.payload.product.id,
      );
      if (itemDel && itemDel.quantity > 1) itemDel.quantity -= 1;
      else state.products.splice(state.products.indexOf(itemDel), 1);
      return {...state, products: [...state.products]};
    default:
      return state;
  }
};

export default basketReducer;

export const addToCart = (product: any) => ({
  type: ADD_TO_CART,
  payload: {product},
});

export const addOneMore = (product: any) => ({
  type: ADD_TO_COUNT,
  payload: {product},
});

export const delOneMore = (product: any) => ({
  type: DELETE_TO_COUNT,
  payload: {product},
});
export const emptyCart = (product: any) => ({
  type: EMPTY_CART,
  payload: {product},
});
