import { Key, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Repositories = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const response = await axios.get(userData?.repos_url);
      console.log(response.data);
      setRepos(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(repos);

  useEffect(() => {
    fetchRepos();
  }, [userData]);

  return (
    <div className="flex flex-wrap justify-center">
      {repos.map((repo, i) => (
        <div
          key={i}
          className="flex flex-col items-start justify-start my-10 border w-1/5 mx-7 p-7"
        >
          <h2 className="text-4xl font-mono font-bold">{repo?.name}</h2>
          <p className="text-xl font-mono font-semibold">{repo?.description}</p>
          <Link
            to={`${repo?.html_url}`}
            className="text-xl font-mono font-semibold mt-4"
          >Link</Link>
        </div>
      ))}
    </div>
  );
};
export default Repositories;
