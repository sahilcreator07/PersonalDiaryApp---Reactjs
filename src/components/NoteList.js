import React from 'react';
import './NoteList.css';

function NoteList({ notes, onDeleteNote }) {
  return (
    <div>
      <ul>
        {notes.map((note, index) => (
          <li key={index} className="note-container">
            <div className="note-content">
              <h3>{note.title}</h3>
              <p>Date: {note.date}</p>
              <p id='para'>{note.text}</p>
            </div>
            <button className='button-delete' onClick={() => onDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
