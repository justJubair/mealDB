import Nav from "../Nav/Nav";
import { Outlet, useNavigate, useNavigation} from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
const handleSearch = e=>{
  e.preventDefault();
  const searchMeal = e.target.search.value
  navigate(`/search/${searchMeal}`)
}  
  return (
    <div>
      <Nav />
     
      <div>
        <form onSubmit={handleSearch}>
          <input className="border-2" type="search" name="search" id="" />
          <input  type="submit" value="Submit" />
        </form>
      </div>
      {
        navigation.state === 'loading' ? <div className="text-center my-40"><span className="loading loading-spinner loading-lg"></span></div> : <Outlet />
      }
     
      
    </div>
  );
};

export default Home;
