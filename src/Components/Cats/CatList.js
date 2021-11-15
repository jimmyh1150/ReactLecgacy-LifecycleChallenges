import React from "react";

const CatList = (props) => {
  return (
    <ol>
      {props.breeds.map((cat) => (
        <li>{cat}</li>
      ))}
    </ol>
  );
};

export default CatList;
