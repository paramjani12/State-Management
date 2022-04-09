import * as React from "react";
import AuthContext from "./contexts/authContext";

const LoginPage = () => {
  const [userName, setUserName] = React.useState("");
  const authCtx = React.useContext(AuthContext);

  const handleSubmit = () => {
    authCtx.setUser({ userName: userName });
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Login</button>
      {/* <button onClick={authCtx.signInWithGoogle} /> */}
    </div>
  );
};

export default LoginPage;
