import { useCallback, useContext } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { useDispatch, useSelector } from "react-redux";
import { logout, setCredentials } from "../store/slices/authSlice";

export const useAuth = () => {
  const { token, tokenData, logIn, logOut, idToken, error, loginInProgress } =
    useContext(AuthContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = useCallback(async () => {
    try {
      await logIn();
    } catch (error) {
      console.error("Login error:", error);
    }
  }, [logIn]);

  const handleLogout = useCallback(async () => {
    try {
      await logOut();
      dispatch(logout());
    } catch (error) {
      console.error("Logout error:", error);
    }
  }, [logOut, dispatch]);

  const updateCredentials = useCallback(
    (token, user) => {
      dispatch(setCredentials({ token, user }));
    },
    [dispatch]
  );

  return {
    user,
    token,
    tokenData,
    idToken,
    isAuthenticated,
    loginInProgress,
    error,
    login: handleLogin,
    logout: handleLogout,
    updateCredentials,
  };
};
