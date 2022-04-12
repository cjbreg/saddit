import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";
import { State } from "../../store/reducers";

const AuthenticationButton = () => {
  const { user } = useSelector((state: State) => state.auth);

  return user ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
