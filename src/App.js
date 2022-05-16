import Movie from "./components/movie";
import MoviesList from "./components/movies-list";
import Login from "./components/login";
import AddReview from "./components/add-review";

import { Nav, Navbar } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  async function login(user = null) {
    setUser(user);
  }
  async function logout() {
    setUser(null);
  }

  //19522187 - Ngô Gia Thái

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/movies"}>Movies</Link>
            </Nav.Link>
            <Nav.Link>
              {user ? (
                <a onClick={logout}>Logout User</a>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route index element={<MoviesList />}></Route>
        <Route path="/movies" element={<MoviesList />}></Route>
        <Route
          path="/movies/:id/review"
          element={<AddReview user={user} />}
        ></Route>
        <Route path="/movies/:id" element={<Movie user={user} />}></Route>
        <Route path="/login" element={<Login login={login} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
