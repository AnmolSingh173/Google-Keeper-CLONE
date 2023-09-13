import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Note from "./Note";
import Footer from "./footer";


function CreateContent(notes) {
    return (<Note 
        key={notes.key}
        title={notes.title}
        content={notes.content}
/>)
    
}
function App() {
    return (
        <div> <Header />
            {notes.map(CreateContent)}
            <Footer />
        </div>
    );
}

export default App;