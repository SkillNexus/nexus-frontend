import ReactDOM from "react-dom/client";

import { AuthProvider } from "react-oauth2-code-pkce";
import { Provider } from "react-redux";
import { authConfig } from "./authConfig";
import { store } from "./store/store";

import App from "./App";

// As of React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider
    authConfig={authConfig}
    loadingComponent={<div>Loading...</div>}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>
);
