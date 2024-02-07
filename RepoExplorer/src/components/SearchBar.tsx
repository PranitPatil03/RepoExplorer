import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("pranitpatil03");

  const { userData, setUserData } = useContext(UserContext);

  const fetchData = async () => {
    const data = await axios.get(`https://api.github.com/users/${searchInput}`);
    setUserData(data.data);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    fetchData();
    console.log(userData);
  }, [searchInput]);

  return (
    <>
      <div className="flex items-center justify-center w-full relative">
        <input
          value={searchInput}
          type="text"
          name="search"
          onChange={handleChange}
          placeholder="Search by github username"
          className="my-6 py-3 px-12 outline-none rounded-xl border border-gray-300	w-11/12"
        />
        <i className="fi fi-rr-search absolute w-5 h-5 text-base left-24 top-1/2 -translate-y-1/2  md:pointer-events-none"></i>
      </div>
    </>
  );
};

export default SearchBar;
