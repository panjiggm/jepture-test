export const isLogin = credential => {
  return {
    type: "IS_LOGIN",
    payload: credential
  };
};
