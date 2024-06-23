import { Link } from "react-router-dom";

export function RootRoute() {
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

      <h1>Landing Pages</h1>
    </div>
  );
}
