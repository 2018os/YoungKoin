import React, { useEffect } from "react";
import Link from "next/link";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
const GET_CHECKLOGIN = gql`
  query {
    CheckLogin
  }
`;
const CheckLogin = () => {
  const { loading, data } = useQuery(GET_CHECKLOGIN);
  // const Logout = e => {
  //   e.preventDefault();
  //   dummyUser.isLoggedin = false;
  //   Router.push("/");
  // };
  useEffect(() => {
    console.log("useEffect");
  })
  if(loading) return <p>loading...</p>
  return (
    <div>
      {
        
        data.CheckLogin ? (
        <>
          <div className="link">NickName</div>
          <Link href="/logout">
            <a className="link">
              Log Out
            </a>
          </Link>
        </>
      ) : (
        <>
          <Link href="/signin">
            <a className="link">
              Sign In
            </a>
          </Link>
          <Link href="/signup">
            <a className="link">
              Sign Up
            </a>
          </Link>
        </>
      )}
    </div>
  );
};

export default CheckLogin;
