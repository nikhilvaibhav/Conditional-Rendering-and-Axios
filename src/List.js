import React from "react";
import ReactDOM from "react-dom";

function List(props) {
  const names = props.arr;
  const lists = names.map((name) => <li key={name.toString()}>{name}</li>);

  return <ul>{lists}</ul>;
}

export default List;
