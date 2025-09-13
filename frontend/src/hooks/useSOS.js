import { useContext } from "react";
import { SOSContext } from "../context/SOSContext";

const useSOS = () => {
  return useContext(SOSContext);
};

export default useSOS;
