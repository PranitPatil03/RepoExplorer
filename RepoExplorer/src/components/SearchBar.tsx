const SearchBar = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full relative">
        <input
          type="text"
          name="search"
          placeholder="Search by github username"
          className="my-6 py-3 px-12 outline-none rounded-xl border border-gray-300	w-11/12"
        />
        <i className="fi fi-rr-search absolute w-5 h-5 text-base left-24 top-1/2 -translate-y-1/2  md:pointer-events-none"></i>
      </div>
    </>
  );
};

export default SearchBar;
