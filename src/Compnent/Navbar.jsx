import Dashboard from "./Dashboard/Dashboard";

const Navbar = () => {
  const navlinks = (
    <>
      <li>About</li>
      <li>Package</li>
      <li>blog</li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-25 bg-base-10">
      <div className="navbar-start">
        <div className="dropdown">
          {/* <div tabIndex={0} role="button" className="btn btn-ghost hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div> */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>

        <div>
          <Dashboard  />
          <p className="block lg:hidden">
            {navlinks}
          </p>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 text-white lg:text-xl">
          {navlinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
