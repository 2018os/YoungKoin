import React, { useState, useCallback } from "react";

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const onSubmit = e => {
    e.preventDefault();
    console.log(e);
  };
  const [nickname, setNickname] = useInput("");
  const [id, setId] = useInput("");
  const [password, setPassword] = useInput("");
  const [password_Check, setPassword_Check] = useInput("");
  return (
    <center>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <br />
          <input
            type="text"
            placeholder="nickname"
            name="nickname"
            value={nickname}
            onChange={setNickname}
          />
        </div>
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
          <label htmlFor="password_Check">비밀번호 체크</label>
          <br />
          <input
            type="password"
            placeholder="password_Check"
            name="password_Check"
            value={password_Check}
            onChange={setPassword_Check}
          />
        </div>
        <div>
          <button type="submit">Sign Un</button>
        </div>
      </form>
    </center>
  );
};

export default Signup;
