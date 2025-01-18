import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type UserTableTypes = {
  id: Number;
  name: String;
  username: String;
  email: String;
};

function ViewUser() {
  const [userInfo, setUserInfo] = useState<UserTableTypes>();
  const { id } = useParams();

  useEffect(() => {
    getAllUserInfo();
  }, []);
  const getAllUserInfo = async () => {
    const response = await axios.get(`http://localhost:8080/user/${id}`);
    setUserInfo(response.data);
  };
  if (!userInfo) {
    return <>No user data</>;
  }

  return (
    <>
      <div className="container m-auto pt-2 shadow-md rounded-lg">
        <div className="border-2 p-4 rounded-lg">
          <h2 className="text-center text-4xl">User Details</h2>
          <div className="card">
            <div className="card-header">
              <div className="flex flex-col justify-around text-center">
                <div className="pb-1">Details of user id:</div>
                <div className="pb-3 m-auto">
                  <div className="flex items-center justify-center border-2 m-auto px-2 py-1">
                    <b>Name:&ensp;</b>
                    <p>{userInfo.name}</p>
                  </div>
                </div>

                <div className="pb-3 m-auto">
                  <div className="flex items-center justify-center border-2 m-auto px-2 py-1">
                    <b>Username:&ensp;</b>
                    <p>{userInfo.username}</p>
                  </div>
                </div>

                <div className="pb-3 m-auto">
                  <div className="flex items-center justify-center border-2 m-auto px-2 py-1">
                    <b>Email:&ensp;</b>
                    <p>{userInfo.email}</p>
                  </div>
                </div>
                <Link
                  className="bg-blue-500 text-white hover:bg-blue-300 px-4 py-2 rounded-lg m-auto"
                  to={"/"}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUser;
