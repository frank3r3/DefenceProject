import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login/" element={<Login />} /> */}
        <Route path="/register/" element={<Register />} />
        {/* <Route path="/get" element={<FetchAllUsers />} />
        <Route path="/dashboard/:id" element={<FetchSingleUser />} />
        <Route path="/update/:id" element={<UpdateSingleUser />} />
        <Route path="/delete/:id" element={<DeleteSingleUser />} /> */}
      </Routes>
    </>
  );
}

export default App;
