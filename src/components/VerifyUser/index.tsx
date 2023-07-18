import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useLogin } from "../../hooks/useLogin";
import { authenticate, setUsername, useStateLogin } from "../../redux/loginSlice";

export default function VerifyUser(){
  const dispatch = useDispatch();
  const {authenticateIs} = useSelector(useStateLogin);
  const {username} = useSelector(useStateLogin);

  const logar = useLogin();

  useEffect(() => {
    async function validate() {
      const storageToken = localStorage.getItem('authToken');
      const storageUsername = localStorage.getItem('username');
      if (storageToken && storageUsername) {
        await logar
          .verifyToken(storageToken)
          .then((res) => {
            if (res.status === 200) {
              dispatch(authenticate(true));
              dispatch(setUsername(storageUsername));
            }
          })
          .catch(() => {
            dispatch(authenticate(false));
            localStorage.clear();
          });
      }
    }
    validate();
  },[username, authenticateIs]);
    return (<></>);
}