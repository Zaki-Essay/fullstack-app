import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-blue-500  text-white flex p-4 justify-between">
        <div className="text-3xl">Full Stack Application</div>
        <Link
          className="border-2 border-white p-3 rounded-lg hover:bg-white hover:text-blue-500 text-lg"
          to={"/adduser"}
        >
          Add User
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
