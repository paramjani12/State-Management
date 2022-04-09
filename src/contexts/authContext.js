import * as React from "react";

const AuthContext = React.createContext({
  // INTIAL STATE
  user: {
    userName: ""
  },
  getUser: () => {},
  setUser: (data) => {},
  logout: () => {},
  // signInWithGoogle: () => {}
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = React.useState({
    userName: ""
  });

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  function getUser() {
    return user;
  }
  function setUserFunc(data) {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  }

  // function signInWithGoogle() {
  //   .....Google Code
  // }

  function logout() {
    setUserFunc(null);
    localStorage.removeItem("user");
  }

  return (
    // DON"T FORGET TO LINK
    <AuthContext.Provider
      value={{
        user: user,
        getUser: getUser,
        setUser: setUserFunc,
        logout: logout,
        // signInWithGoogle: signInWithGoogle
      }}
    >
      {props?.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
