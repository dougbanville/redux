import { UPDATE_USER } from "../actions/user-actions";

const userReducer = (state = "", { type, payload }) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    default:
      return state;
  }
};
export default userReducer;
