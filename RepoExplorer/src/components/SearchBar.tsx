import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { useContext, useEffect, useState } from 'react';

const SearchBar = () => {
  const { setUserData } = useContext(UserContext);

  const [searchInput, setSearchInput] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const fetchData = async () => {
    if (debouncedValue) {
      try {
        const response = await axios.get(`https://api.github.com/users/${debouncedValue}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(searchInput), 2000);
    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    const controller = new AbortController();

    fetchData();

    return () => controller.abort();
  }, [debouncedValue, setUserData]);

  return (
    <div className="flex items-center justify-center w-full relative">
      <input
        type="text"
        name="search"
        placeholder="Search by GitHub username"
        className="my-6 py-3 px-12 outline-none rounded-xl border border-gray-300 w-11/12"
        value={searchInput}
        onChange={handleChange}
      />
      <i className="fi fi-rr-search absolute w-5 h-5 text-base left-24 top-1/2 -translate-y-1/2 md:pointer-events-none"></i>
    </div>
  );
};

export default SearchBar;
