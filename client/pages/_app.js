import React, { useState, useCallback } from "react";
import Link from "next/link";
import Router from "next/router";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apolloClient.";
import CheckLogin from "./checkLogin";

// export const dummyUser = {
//   id: "kim",
//   password: "1234",
//   nickName: "QWEQEWQQQ",
//   isLoggedin: true
// };

const Layout = ({ Component }) => {
  const [dummyUser, setDummy] = useState({
    id: "kim",
    password: "1234",
    nickName: "QWEQEWQQQ",
    isLoggedin: true
  });
  const Logout = useCallback(e => {
    e.preventDefault();
    setDummy({
      ...dummyUser,
      isLoggedin: false
    });
    Router.push("/");
  }, []);
  return (
    <>
      <ApolloProvider client={client}>
        <div className="navbar">
          <Link href="/">
            <a>
              <img src="/static/images/Y_Koin.png" />
            </a>
          </Link>
          <CheckLogin dummyUser={dummyUser} Logout={Logout} />
        </div>
        <Component />
      </ApolloProvider>
      <style global jsx>
        {`
          body {
            background: url(/static/images/GridBG.png) no-repeat center center
              fixed;
            margin: 0;
          }
          div {
            color: white;
          }
          .link {
            font-size: 20px;
            padding: 10px;
            color: white;
            text-decoration: none;
            float: right;
          }
          .footer {
            font-size: 20px;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
