import "./App.css";
import Header from "./component/Header";
// import Document from "./component/Document/Document";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <BrowserRouter></BrowserRouter>
      </div>
    </>
  );
}

export default App;
