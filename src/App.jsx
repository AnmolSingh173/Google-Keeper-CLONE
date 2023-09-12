import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/footer";

function App() {
    return (
        <div> <Header />
            <Footer />
            <Note />
        </div>
    );
}

export default App;