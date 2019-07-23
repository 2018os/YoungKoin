import React, { useState, useCallback } from "react";
import { dummyUser } from './_app';
import Router from 'next/router';

const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signin = () => {
  const onSubmitForm = e => {
    e.preventDefault();
    if(dummyUser.id == id && dummyUser.password == password) {
      dummyUser.isLoggedin = true;
      console.log("Log in Success");
      Router.push('/');
    } else {
      console.log("Log in False");
    }
  };
  const [id, setId] = useInput("");
  const [password, setPassword] = useInput("");
  return (
    <center>
      <form onSubmit={onSubmitForm}>
        <div>
          <label htmlFor="id">아이디</label>
          <br />
          <input type="text" placeholder="id" name="id" value={id} onChange={setId} />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <br />
          <input type="password" placeholder="password" name="password" value={password} onChange={setPassword} />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </center>
  );
};

export default Signin;
