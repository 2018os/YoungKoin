import React from "react";
import Link from "next/link";

const Layout = ({ Component }) => {
  return (
    <>
      <div className="navbar">
        <Link href="/">
          <a>
            <img src="/static/images/Y_Koin.png" />
          </a>
        </Link>
        <Link href="/signin">
          <a className="link">Sign In</a>
        </Link>
        <Link href="/signup">
          <a className="link">Sign Up</a>
        </Link>
      </div>
      <Component />
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
