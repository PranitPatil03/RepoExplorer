import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <>
      <div className="flex items-center justify-start w-full gap-5 my-10">
        <div className="my-6 mx-20">
          <img
            src="react.svg"
            className="h-[10rem] w-[10rem] border rounded-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-mono font-semibold">Pranit Patil</h2>
          <p className="text-xl font-mono font-medium line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quos corrupti vero iusto ipsa ex distinctio in numquam illo
            doloremque!
          </p>
          <p className="text-base font-mono font-bold">
            <i className="fi fi-rs-marker mr-3"></i>
            Mumbai
          </p>
          <Link to={`https://modern-blogging-frontend.vercel.app/`} className="text-base font-mono font-bold">
            https://modern-blogging-frontend.vercel.app/
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
