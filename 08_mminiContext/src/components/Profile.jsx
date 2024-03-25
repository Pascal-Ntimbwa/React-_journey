import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h2>Not Logged In</h2>;

  return (
    <div>
      <h2>Profile: {user.username}</h2>
      <br />
      <h4>More Components may follow</h4>
    </div>
  )
}

export default Profile;
