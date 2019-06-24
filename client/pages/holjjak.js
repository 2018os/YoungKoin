import React, { useState } from "react";

const Holjjak = () => {
  const [something, setSomething] = useState("");
  const onClickBtn = e => {
    e.preventDefault();
    setSomething(e.target.value);
  };
  const onSubmitForm = e => {
    e.preventDefault();
    if (something === "HOL") {
      console.log("Win");
    } else {
      console.log("Lose");
    }
    setSomething("");
  };
  return (
    <div>
      <form onSubmit={e => onSubmitForm(e)}>
        <button onClick={e => onClickBtn(e)} value="HOL">
          HOL
        </button>
        <button onClick={e => onClickBtn(e)} value="JJAK">
          JJAK
        </button>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Holjjak;
