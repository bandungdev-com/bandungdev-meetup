import { Link } from "react-router-dom";

export function AboutRoute() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
        </ul>
      </nav>
      <h1>About Pages</h1>
    </div>
  );
}
