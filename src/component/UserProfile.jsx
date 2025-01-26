import { UserContext } from "../UserContext";
import { useContext } from "react";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>User Profile</h1>
      <p> Name : {user.name}</p>
    </div>
  );
};

export default UserProfile;
