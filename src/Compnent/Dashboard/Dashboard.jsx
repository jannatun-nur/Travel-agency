import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
    return (
        <div>
            <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="text-white font-bold lg:text-2xl"><GiHamburgerMenu /></label>
  </div>
  <div className="drawer-side z-50">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu  text-base-content min-h-full w-8/12 lg:w-80 p-4 bg-white shadow-2xl shadow-blue-900">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Dashboard;