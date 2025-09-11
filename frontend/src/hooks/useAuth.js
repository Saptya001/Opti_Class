import { useContext } from "react";
<<<<<<< HEAD
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  return useContext(AuthContext);
=======
import { useAuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  const { user, loading, login, logout } = useAuthContext();
  return { user, loading, login, logout };
>>>>>>> 35c0da0c0c05489e648a6be93f0ea24cd4468b8d
};

export default useAuth;
