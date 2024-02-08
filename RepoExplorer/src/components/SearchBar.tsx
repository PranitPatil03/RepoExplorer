import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { useContext, useEffect, useState } from "react";

const SearchBar = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [inputData, setInputData] = useState('');

  const [debouncedValue, setDebouncedValue] = useState(inputData);

  const fetchRepoData = async () => {
    if (inputData) {
      const data = await axios.get(`https://api.github.com/users/${inputData}`);
      const githubData = data.data;
      setUserData(githubData);
    }
  };

  const handleChangeUserName = (e) => {
    setInputData(e.target.value);
  };

  useEffect(() => {

    const timer = setTimeout(() => setDebouncedValue(inputData), 2000)

    return () => clearTimeout(timer)
  }, [inputData, 2000]);


  useEffect(() => {

    const controller = new AbortController();

    if (debouncedValue) {
      fetchRepoData()
        .then(({ data }: any) => {
          console.log(data)
          setUserData(data)
        })
    }

    return () => controller.abort();

  }, [debouncedValue])

  return (
    <>
      <div className="flex items-center justify-center w-full relative">
        <input
          value={inputData}
          type="text"
          name="search"
          placeholder="Search by GitHub username"
          className="my-6 py-3 px-12 outline-none rounded-xl border border-gray-300 w-11/12"
          onChange={handleChangeUserName}
        />
        <i className="fi fi-rr-search absolute w-5 h-5 text-base left-24 top-1/2 -translate-y-1/2 md:pointer-events-none"></i>
      </div>
    </>
  );
};

export default SearchBar;
