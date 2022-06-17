import React from "react";
import "./Word.css";

const Word = (props) => (
  <li>
    Słowo po angielski: <strong>{props.english}</strong>. Tłumaczenie:{" "}
    <strong>{props.polish}</strong>
  </li>
);

export default Word;
