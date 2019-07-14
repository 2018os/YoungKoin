import React from "react";

const Signin = () => {
  return (
    <center>
      <form>
        <div>
          <label htmlFor="id">아이디</label>
          <br />
          <input type="text" placeholder="id" />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <br />
          <input type="password" placeholder="password" />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </center>
  );
};

export default Signin;
