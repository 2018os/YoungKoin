import React, { useState, useCallback } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_LOGIN = gql`
  mutation Login($id: String!, $password: String!) {
    Login(id: $id, password: $password) {
      msg
    }
  }
`;

const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signin = () => {
  const [getLogin, { data }] = useMutation(GET_LOGIN);
  const [id, setId] = useInput("");
  const [password, setPassword] = useInput("");
  const onSubmitForm = e => {
    console.log("1");
    e.preventDefault();
    getLogin({ variables: { id: id, password: password } }); // where is data 
    Router.push('/');
  };
  return (
    <center>
      <form onSubmit={onSubmitForm}>
        <div>
          <label htmlFor="id">아이디</label>
          <br />
          <input
            type="text"
            placeholder="id"
            name="id"
            value={id}
            onChange={setId}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={setPassword}
          />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </center>
  );
};

export default Signin;
