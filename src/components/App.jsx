import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Note from "./Note";
import Footer from "./footer";
import notes from "../notes";

function createNote(new_item) {
    return (
        <Note
            key={new_item.key}
            title={new_item.title}
            content={new_item.content}
        />
    );
}

function App() {
    return (
        <div> <Header />
            {notes.map(createNote)}
            <Footer />
        </div>
    );
}

export default App;