import React from "react";
import Link from "next/link";
import { dummyUser } from "./_app";
import Router from "next/router";
import gql from "graphql-tag";

import { Query } from "react-apollo";

const getHello = gql`
  query {
    hello
  }
`;

const Home = () => {
  const onClickGame = e => {
    if (!dummyUser.isLoggedin) {
      e.preventDefault();
      alert("Login plz");
      Router.push("/signin");
    }
  };
  return (
    <Query query={getHello}>
      {({ loading, data }) => {
        if (loading) {
          return "qweqwr";
        }
        return (
          <center>
            <div className="youngstabit">
              <img
                src="/static/images/Youngstabit.png"
                alt="youngstabit"
                id="youngstabit"
              />
            </div>
            <div className="games">
              {/* <div className="imgwap"> */}
              <Link href="/holjjak">
                <a onClick={onClickGame}>
                  <img src="/static/images/Ladder.png" alt="Ladder" />
                </a>
              </Link>
              <Link href="/graph">
                <a onClick={onClickGame}>
                  <img src="/static/images/Graph.png" alt="Graph" />
                </a>
              </Link>
              <Link href="/bomb">
                <a onClick={onClickGame}>
                  <img src="/static/images/MineSweeper.png" alt="MineSweeper" />
                </a>
              </Link>
              {data.hello}
            </div>
            <style global jsx>
              {`
                html {
                  margin: 0;
                }
                .youngstabit {
                  margin: 50px;
                }
                #youngstabit {
                  display: block;
                  margin: 0px auto;
                }
                .games {
                  display: grid;
                  grid-template-columns: 640px 640px 640px;
                  grid-template-rows: 50px 50px;
                }
              `}
            </style>
          </center>
        );
      }}
    </Query>
  );
};

export default Home;
