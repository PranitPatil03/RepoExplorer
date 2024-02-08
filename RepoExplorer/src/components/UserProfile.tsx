import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";

const UserProfile = () => {

  const { userData, setUserData } = useContext(UserContext);

  console.log(userData)

  return (
    <>
      <div className="flex items-center justify-start w-full gap-5 my-10">
        <div className="my-6 mx-20">
          <img
            src={userData.avatar_url}
            className="h-[10rem] w-[10rem] border rounded-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-mono font-semibold">{userData.name}</h2>
          <p className="text-xl font-mono font-medium line-clamp-2">
            {userData.bio || "No Bio"}
          </p>
          <p className="text-base font-mono font-bold">
            <i className="fi fi-rs-marker mr-3"></i>
            {userData.location || "No Location"}
          </p>
          <Link to={`${userData.html_url}`} className="text-base font-mono font-bold">
            {userData.html_url}
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
