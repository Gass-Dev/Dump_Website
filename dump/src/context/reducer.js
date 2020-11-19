module.exports = {
  reducer: (state, action) => {
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("token", action.payload.data.token);
        localStorage.setItem("userId", action.payload.data.userId)
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.data.token,
          userId: action.payload.data.userId,
        };
      case "LOGOUT":
        localStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          userId: null,
        };
      case "LOAD_USER":
        return {
          ...state,
          isAuthenticated: true,
          userId: action.payload,
        };
      default:
        return state;
    }
  }
}