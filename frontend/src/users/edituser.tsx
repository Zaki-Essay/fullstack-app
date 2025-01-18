import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

type UserData = {
  name: String;
  username: String;
  email: String;
};

function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const { name, username, email }: UserData = user;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const resualt = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(resualt.data);
  };

  return (
    <>
      <div className="container m-auto pt-2 shadow-md rounded-lg">
        <div className="border-2 p-4 rounded-lg">
          <h1 className="text-center">Edit User</h1>
          <form onSubmit={(event) => onSubmit(event)}>
            <div className="flex flex-col justify-around text-center">
              <label htmlFor="Name">Name</label>
              <div>
                <input
                  type="text"
                  className="text-center border-2 border-gray-400 rounded-md"
                  placeholder="Enter your Name"
                  name="name"
                  value={String(name)}
                  onChange={(event) => onInputChange(event)}
                />
              </div>
              <label htmlFor="username">Username</label>
              <div>
                <input
                  type="text"
                  className="text-center border-2 border-gray-400 rounded-md"
                  placeholder="Enter your Username"
                  name="username"
                  value={String(username)}
                  onChange={(event) => onInputChange(event)}
                />
              </div>
              <label htmlFor="email">Email</label>
              <div>
                <input
                  type="text"
                  className="text-center border-2 border-gray-400 rounded-md"
                  placeholder="Enter your Eamil"
                  name="email"
                  value={String(email)}
                  onChange={(event) => onInputChange(event)}
                />
              </div>
              <div className="pt-2">
                <Link
                  className="bg-red-500 text-white hover:bg-red-300 px-4 py-3 rounded-lg mr-2"
                  to={"/"}
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="bg-blue-500 text-white hover:bg-blue-300 px-4 py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditUser;
