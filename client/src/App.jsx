
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return <div  className="max-w-7xl mx-auto px-5">
    <nav className="flex justify-between border-b-2 py-4 mb-5">
      <a href="/">WEB <span>PROFILE</span></a>
      <Link to='/create-user'>CLICK HERE TO ADD USERS</Link>
    </nav>
    <Outlet/>
  </div>;
}

export default App;
