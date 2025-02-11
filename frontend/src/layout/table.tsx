import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table.tsx";

type Costumer = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function UserTable() {
  const [userInfo, setUserInfo] = useState<Costumer[]>([]);
  useEffect(() => {
    getAllUserInfo();
  }, []);

  const getAllUserInfo = async () => {
    const response = await axios.get("http://localhost:8080/users");
    setUserInfo(response.data);
  };

  const deleteUser = async (id: number) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    getAllUserInfo();
  };

  return (
    <>
      <div className="container flex justify-center items-center py-4 m-auto ">
        <div className="flex items-center justify-center w-full">

        <Table<Costumer>
            headers={[
              {key: 'id', label: 'Id'},
              {key: 'name', label: 'Name'},
              {key: 'username', label: 'Username'},
              {key: 'email', label: 'Email'},
            ]}
            data={userInfo}

        />
        </div>


        <table className="shadow-md">
          <thead className="border-2 border-black">
            <tr>
              <th scope="col" className="table-heading-styles">
                #
              </th>
              <th scope="col" className="table-heading-styles">
                Name
              </th>
              <th scope="col" className="table-heading-styles">
                Username
              </th>
              <th scope="col" className="table-heading-styles">
                Email
              </th>
              <th scope="col" className="pl-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userInfo.map((user, index) => {
              return (
                <>
                  <tr className="border-b-2 border-black" key={String(user.id)}>
                    <th>{index + 1}</th>
                    <td className="table-entry-styles text-center">
                      {user.name}
                    </td>
                    <td className="table-entry-styles text-center">
                      {user.username}
                    </td>
                    <td className="table-entry-style text-center">
                      {user.email}
                    </td>
                    <td className="pl-6 flex">
                      <Link
                        className="border-2 p-2 bg-blue-500 text-white hover:bg-blue-300 hover:text-white"
                        to={`/viewuser/${user.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="border-2 p-2 border-blue-500 text-blue-500 hover:border-white hover:bg-green-500 hover:text-white"
                        to={`/edituser/${user.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="border-2 p-2 bg-red-500 text-white hover:bg-red-300"
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserTable;
