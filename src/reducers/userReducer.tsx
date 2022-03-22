const CHANGE_NAME = 'detailsaddCHANGE_NAME';
const CHANGE_PHONE = 'detailsaddCHANGE_PHONE';
const CHANGE_ADDRESS = 'detailsaddCHANGE_ADDRESS';

const initialValue = {
  name: '',
  phone: '',
  address: '',
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {...state, name: action.payload.name};
    case CHANGE_PHONE:
      return {...state, phone: action.payload.phone};
    case CHANGE_ADDRESS:
      return {...state, address: action.payload.address};
    default:
      // throw new Error(`Unknown action type: ${action.type}`);
      return state;
  }
};

export default userReducer;

export const changeName = (name: string) => ({
  type: CHANGE_NAME,
  payload: {name},
});
export const changePhone = (phone: string) => ({
  type: CHANGE_PHONE,
  payload: {phone},
});
export const changeAddress = (address: string) => ({
  type: CHANGE_ADDRESS,
  payload: {address},
});
