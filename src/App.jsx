import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router";
import "./App.css";
import { setCredentials } from "./store/authSlice";

function App() {
  const { token, tokenData, logIn, LogOut } = useContext(AuthContext);
  const dispatch = useDispatch();
  // Removed unused authReady state

  useEffect(() => {
    if (token) {
      dispatch(setCredentials({ token, user: tokenData }));
      // setAuthReady removed
    }
  }, [token, tokenData, dispatch]);

  return (
    <Router>
      {!token ? (
        <Button
          variant="contained"
          color="#dc004e"
          onClick={() => {
            logIn();
          }}
        >
          LOGIN
        </Button>
      ) : (
        <div>
          <pre>{JSON.stringify(tokenData, null, 2)}</pre>
        </div>
      )}
    </Router>
  );
}

export default App;
