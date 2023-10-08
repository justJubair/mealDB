import { useEffect } from "react";
import Nav from "../Nav/Nav";
import { Outlet,useLocation, useNavigation } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation()
  useEffect(()=>{
    if(location.pathname === "/"){
      document.title = "MealDB"
    } else {
      document.title = location.pathname.replace("/", "");
    }
    if(location.state) {
      document.title = location.state
    }
  },[location.pathname, location.state])
  return (
    <div>
      <Nav />
     

      {navigation.state === "loading" ? (
        <div className="text-center my-40">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Home;
