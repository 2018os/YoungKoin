import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
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
          <a>
            <img src="/static/images/Ladder.png" alt="Ladder" />
          </a>
        </Link>
        <Link href="/graph">
          <a>
            <img src="/static/images/Graph.png" alt="Graph" />
          </a>
        </Link>
        <Link href="/bomb">
          <a>
            <img src="/static/images/MineSweeper.png" alt="MineSweeper" />
          </a>
        </Link>
        {/* </div> */}
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
    </>
  );
};

export default Home;
