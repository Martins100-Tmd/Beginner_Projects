var NAV = function () {
  return (
    <nav className="sm:flex flex-row items-center grid grid-cols-4 justify-between bg-black sm:p-5 p-3">
      <a href="./#" className=" sm:flex hidden flex-row items-center">
        <i
          style={{ fontSize: "30px" }}
          className="fa text-white text-center sm:inline hidden animate-bounce"
        >
          &#xf174;
        </i>{" "}
        <p className="font-pop font-semibold text-2xl text-white ml-2">
          Tailwing
        </p>
      </a>
      <i
        style={{ fontSize: "30px" }}
        className="fa sm:hidden inline text-white text-center animate-bounce"
      >
        &#xf174;
      </i>
      <a href="./#" className="sm:hidden">
        <li className="font-pop font-semibold text-base text-white text-center list-none">
          Home
        </li>
      </a>
      <a href="./#" className="sm:hidden">
        <li className="font-pop font-semibold text-base text-white sm:hidden text-center list-none">
          About
        </li>
      </a>
      <a href="./#" className="sm:hidden">
        <li className="font-pop font-semibold text-base text-white sm:hidden text-center list-none">
          Contact
        </li>
      </a>
      <ul className="sm:flex flex-row items-center gap-10 hidden">
        <a href="./#">
          <li className="font-pop font-semibold text-base text-white">Home</li>
        </a>
        <a href="./#">
          <li className="font-pop font-semibold text-base text-white">About</li>
        </a>
        <a href="./#">
          <li className="font-pop font-semibold text-base text-white">
            Contact
          </li>
        </a>
      </ul>
      <button
        className="px-4 py-2 rounded text-sm font-pop font-semibold text-white 
            bg-orange-800 sm:inline hidden shadow"
      >
        Sign up
      </button>
    </nav>
  );
};
export default NAV;
