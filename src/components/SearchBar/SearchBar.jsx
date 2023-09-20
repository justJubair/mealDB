import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const searchMeal = e.target.search.value;
    navigate(`/search/${searchMeal}`);
    e.target.search.value = "";
  };
  return (
    <div className="text-center mt-16">
      <form onSubmit={handleSearch}>
        <input
          className="border-2 w-1/2 p-2"
          type="search"
          name="search"
          id=""
          placeholder="Search food"
        />
        <input
          className="bg-yellow-500 px-6 py-2 rounded-lg ml-8 font-semibold hover:bg-yellow-600 hover:cursor-pointer"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
