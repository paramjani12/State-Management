import * as React from "react";
import AuthContext from "./contexts/authContext";
import LoginPage from "./LoginPage";

const HomePage = ({ userName }) => {
  const ctx = React.useContext(AuthContext);
  return (
    <div>
      <p>Welcome {userName} !</p>
      <button onClick={ctx.logout}>logout</button>
    </div>
  );
};

const Navbar = () => {
  const ctx = React.useContext(AuthContext);

  return <div>Navbar {ctx.user == null ? "LOGIN" : "LOGOUT"}</div>;
};

const App = () => {
  const authCtx = React.useContext(AuthContext);
  console.log(authCtx.user);
  return (
    <React.Fragment>
      <Navbar />
      {authCtx.user?.userName == null ? (
        <LoginPage />
      ) : (
        <HomePage userName={authCtx.user?.userName} />
      )}
    </React.Fragment>
  );
};

export default App;
