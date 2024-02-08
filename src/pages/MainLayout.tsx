import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserContext } from "../contexts/UserContext";
import { User } from "../models/User";
import { useReducer } from "react";
import { UserReducer } from "../reducers/UserReducer";

const MainLayout = () => {
  const [user, dispatch] = useReducer(
    UserReducer,
    new User(
      "1",
      "CoolCat420",
      "Mittens Johnson",
      154124,
      24,
      `🐾 Pawsitively purrfect feline living my nine lives to the fullest 😎
    Catnip connoisseur 🌿 
  Master of mischief and nap enthusiast 💤
  Rocking whiskers and a killer attitude 😼`,
      "Pawfluencer",
      "avatar.jpg",
    ),
  );
  return (
    <>
      <UserContext.Provider value={{ user, dispatch }}>
        <div className="mx-auto max-w-screen-sm px-4 pb-20">
          <Outlet />
        </div>
        <Navbar />
      </UserContext.Provider>
    </>
  );
};

export default MainLayout;
