import React from "react";
import ReactDOm from "react-dom";

function List(props) {
  const names = props.arr;
  const lists = names.map((name) => <li>{name}</li>);

  return <ul>{lists}</ul>;
}

export default List;
