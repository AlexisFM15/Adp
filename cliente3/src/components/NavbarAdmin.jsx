import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button, Dropdown, Navbar } from "flowbite-react";

function NavbarAdmin() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Navbar className="bg-blue-700 mt-0.5 mb-2 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-red-600 text 2xl font-bold">ADP</h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <Dropdown dismissOnClick={false}>
              <Dropdown.Item autoFocus>
                <Link to = "/admin/dashboard">Dashboard</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="/"
                  onClick={() => {
                    logout();
                  }}
                >
                  logout
                </Link>{" "}
              </Dropdown.Item>
            </Dropdown>
          </>
        ) : (
          <>
            <li>
              <Button>
                <Link to="/login">login</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link to="/register">register</Link>
              </Button>
            </li>
          </>
        )}
      </ul>
    </Navbar>
  );
}

export default NavbarAdmin;
