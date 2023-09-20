import Nav from "../Nav/Nav";
import { Outlet, useNavigation} from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();
  
  return (
    <div>
      <Nav />
      {/* search field */}
      <div>
        <form action="">
          <input className="border-2" type="search" name="" id="" />
          <button className="btn">search</button>
        </form>
      </div>
      {
        navigation.state === 'loading' ? <div className="text-center my-40"><span className="loading loading-spinner loading-lg"></span></div> : <Outlet />
      }
     
      
    </div>
  );
};

export default Home;
