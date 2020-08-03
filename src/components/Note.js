import React from "react";

export default ({ message, id, deleteNode }) => {
  return (
    <div className="message">
      <p>
        <span className="note">#</span> {id} |{" "}
        <span className="note">Task:</span> {message}{" "}
        <button className="note-button" onClick={() => deleteNode(id)}>
          X
        </button>
      </p>
    </div>
  );
};
