import { Link } from "react-router-dom";

function Navbar({ toggleTheme }) {
  return (
    <div className="navbar">

      <div>
        <Link to="/home">Home</Link>
        <Link to="/projects">Projects</Link>
      </div>

      <button onClick={toggleTheme}>Mode</button>

    </div>
  );
}

export default Navbar;