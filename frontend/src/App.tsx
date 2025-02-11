import Home from "./pages/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddUser from "./users/adduser";
import EditUser from "./users/edituser";
import ViewUser from "./users/viewuser";
import Header from "./layout/Header.tsx";
import Footer from "./layout/Footer.tsx";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

function App() {
    const queryClient = new QueryClient()
  return (

    <>
    <QueryClientProvider client={queryClient}>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>

      <Footer />
      </Router>
    </QueryClientProvider>
    </>
  );
}

export default App;
