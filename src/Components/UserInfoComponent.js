import React, { useEffect, useState } from "react";
import Section from "../style/Section";
import { getUser } from "../utils";
import UserInfoStyles from "./styles/UserInfoStyles";

function UserInfoComponent(props) {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    setUserData(getUser);
  }, []);

  return (
    <Section dark>
      <UserInfoStyles>
        {/*Todo Uncomment This For Fetch Img Online {<img alt={`${userData.login} Github Image`} src={userData.avatar_url} />}*/}
        <img alt={`${userData.login} Github Image`} src={"logo192.png"} />
      </UserInfoStyles>
    </Section>
  );
}

export default UserInfoComponent;
