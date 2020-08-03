import React, { useState } from "react";
import Note from "./Note";

export default () => {
  const [notes, setNotes] = useState([{ id: 1, message: "Practice Coding" }]);
  const [input, setInput] = useState("");

  const handleSubmit = (e, notes, setNotes, input, setInput) => {
    e.preventDefault();
    const id = notes.length ? notes[notes.length - 1].id + 1 : 0;
    setNotes([...notes, { id, message: input }]);
    setInput("");
  };

  const handleDelete = (id, notes, setNotes) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="notes">
      <h2>To-Do List</h2>
      <form onSubmit={(e) => handleSubmit(e, notes, setNotes, input, setInput)}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Add Task"
          className="notes-input"
        />
      </form>
      {notes.map((note) => {
        return (
          <Note
            message={note.message}
            id={note.id}
            deleteNode={(id) => handleDelete(id, notes, setNotes)}
          />
        );
      })}
    </div>
  );
};
