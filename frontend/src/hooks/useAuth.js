import { useContext } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  const { user, loading, login, logout } = useAuthContext();
  return { user, loading, login, logout };
};

export default useAuth;