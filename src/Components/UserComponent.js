import React, { useEffect, useState } from "react";
import { getUser } from "../utils";
import UserInfoComponent from "./UserInfoComponent";

function UserComponent(props) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setUserData(getUser());
  }, []);
  return (
    <div>
      <UserInfoComponent userData="userData" />
    </div>
  );
}

export default UserComponent;
