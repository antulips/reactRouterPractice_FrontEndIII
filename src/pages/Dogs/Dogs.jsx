import React from "react";
import Home from "../Home/Home";

export default function Dogs() {
  return (
    <>
      <Home />
      <h1>
        {" "}
        ¡Muchos guaguagus!{" "}
        <span aria-label="emoji-sparkle" role="img">
          ✨
        </span>
      </h1>
      <span aria-label="emoji-dog" role="img">
        🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶
      </span>
    </>
  );
}
