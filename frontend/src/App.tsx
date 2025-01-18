import Navbar from "./layout/navbar";
import Home from "./pages/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddUser from "./users/adduser";
import EditUser from "./users/edituser";
import ViewUser from "./users/viewuser";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
