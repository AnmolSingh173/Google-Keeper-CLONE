import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Note from "./Note";
import Footer from "./footer";
import notes from "../notes";


function App() {
    return (
        <div> <Header />
            {notes.map(new_item => { <Note key={new_item.key} title={new_item.title} content={new_item.content} /> })}
            <Footer />
        </div>
    );
}

export default App;