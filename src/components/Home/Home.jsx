import Nav from "../Nav/Nav";
import { Outlet, useNavigation } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const navigation = useNavigation();
  // const navigate = useNavigate();
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const searchMeal = e.target.search.value;
  //   navigate(`/search/${searchMeal}`);
  //   e.target.search.value = "";
  // };
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
