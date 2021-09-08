import React, { useEffect } from "react";
import auth from "../../../services/authService";

function Logout() {
  useEffect(() => {
    auth.logout();
    window.location = "/login";
  }, []);

  return "";
}
export default Logout;
