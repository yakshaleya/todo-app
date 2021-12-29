import React from "react";

function Todo(props) {
  return (
    <div>
      <li> {props.text}</li>
      <button
        onClick={() => {
          props.data(props.inde);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Todo;
