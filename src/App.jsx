import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Product from "./component/Product";
import ContactUser from "./component/ContactUser";
import ContactItem from "./component/ContactItem";
import ContactIndex from "./component/ContactIndex";
import NotFound from "./component/NotFound";
import CheckOut from "./component/CheckOut";
import Login from "./component/Login";
import Course from "./component/Course";
import CourseDetail from "./component/CourseDetail";
import CourseDetailByTypeId from "./component/CourseDetailByTypeId";
import Account from "./component/Account";
import PrivateRoute from "./component/PrivateRoute";
import Personal from "./component/Personal";

function App() {
  const navLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "lightblue" : "black",
    color: isActive ? "black" : "pink",
  });

  const navLinkChild = ({ isActive }) => ({
    backgroundColor: isActive ? "violet" : "lightgray",
    color: isActive ? "white" : "red",
  });
  return (
    <div className="App">
      {/* <div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
              <ul>
                <li>
                  <Link to="/contact/contactUser">Contact User</Link>
                </li>
                <li>
                  <Link to="/contact/contactItem">contactItem</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div> */}

      {/* Sử dụng NavLink */}
      <div>
        <div>
          <ul>
            <li>
              <NavLink to="/" style={navLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} style={navLinkStyle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/product"} style={navLinkStyle}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={navLinkStyle}>
                Contact
              </NavLink>
              <ul>
                <li>
                  <NavLink to="/contact/contactUser" style={navLinkChild}>
                    Contact User
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact/contactItem" style={navLinkChild}>
                    contactItem
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          {/* Index Router */}
          <Route index element={<ContactIndex />}></Route>

          {/* Nested Router: Router lồng nhau */}
          <Route path="contactUser" element={<ContactUser />}></Route>
          <Route path="contactItem" element={<ContactItem />}></Route>
        </Route>
        <Route path="/product" element={<Product />}>
          Product
        </Route>

        {/* Login */}

        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* Dynamic Router:  */}
        <Route path="/course" element={<Course />}></Route>
        <Route path="/course/:courseId" element={<CourseDetail />}></Route>
        <Route
          path="/course/:courseType/:courseId"
          element={<CourseDetailByTypeId />}
        ></Route>

        {/* Private Router */}

        <Route element={<PrivateRoute />}>
          <Route path="/personal" element={<Personal />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
