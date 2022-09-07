import React, { useEffect, useState } from "react";
import "./css/AllUsers.css";
import UserNEW from "./UserNEW";
import { Avatar } from "@material-ui/core";

const AllUsers = () => {
  const [data, setData] = useState("");
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    let unmounted = false;
    fetch("http://localhost:9000/allUsers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!unmounted) {
          setData(data);
        }
      })
      .catch((err) => {
        console.log(err.message, "AllUsers");
      });

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <div className="allusers">
      <input
        className="userSearch"
        placeholder="Search User..."
        onChange={(e) => {
          setUserSearch(e.target.value);
        }}
      />
      <div className="allusers">
        <div className="singleUser">
          <div>
            {data &&
              data
                ?.filter((users) => {
                  if (userSearch === "") return users;
                  else if (
                    users.username
                      .toLowerCase()
                      .includes(userSearch.toLowerCase())
                  )
                    return users;
                })
                ?.map((user, allUsers) => {
                  return <UserNEW key={allUsers} userName={user.username} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
