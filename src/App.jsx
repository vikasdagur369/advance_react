import UpdateUser from "./component/UpdateUser";
import UserProfile from "./component/UserProfile";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
}

export default App;
