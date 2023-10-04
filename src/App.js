import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./component/Container/Container";
import UploadComponent from "./component/UploadComponent/UploadComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Container />} />
            <Route path="upload" element={<UploadComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
