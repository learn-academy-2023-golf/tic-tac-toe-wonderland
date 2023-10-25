import React from "react";

const HandleRestart = (props) => {
  const handleClick = () => {
    props.restartGame()
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>Play again</button>
      </div>
    </>
  );
};
export default HandleRestart;
