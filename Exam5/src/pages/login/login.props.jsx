import { useRef } from "react";
import { useAuth } from "../../hooks";

export const useLoginProps = () => {
  const [, setToken] = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onLogin = () => {
    let email = emailRef.current.input.value;
    let password = passwordRef.current.input.value;

    let data = {
      email,
      password,
    };
    fetch(`https://invoices-8ehs.onrender.com/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if(res.status===200){
          return res.json()
        }
        alert ('Something error')
      })
      .then((data) => setToken(data));
  };
  return { onLogin, emailRef, passwordRef };
};
