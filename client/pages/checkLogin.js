import React from "react";
import Link from "next/link";

const CheckLogin = ({ dummyUser, Logout }) => {
  // const Logout = e => {
  //   e.preventDefault();
  //   dummyUser.isLoggedin = false;
  //   Router.push("/");
  // };
  return (
    <div>
      {dummyUser.isLoggedin ? (
        <>
          <div className="link">{dummyUser.nickName}</div>
          <Link href="/logout">
            <a className="link" onClick={Logout}>
              Log Out
            </a>
          </Link>
        </>
      ) : (
        <>
          <Link href="/signin">
            <a className="link" dummyUser={dummyUser}>
              Sign In
            </a>
          </Link>
          <Link href="/signup">
            <a className="link" dummyUser={dummyUser}>
              Sign Up
            </a>
          </Link>
        </>
      )}
    </div>
  );
};

export default CheckLogin;
