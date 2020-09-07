export const initialState = {
  user: null,
  loading: true,
};

export const actionTypes = {
  SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
